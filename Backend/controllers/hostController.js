const Host =require('../models/JobHost')

//new host
exports.createHost=async(req,res)=>{
    try{
        const newHost=new Host(req.body);
        await newHost.save();
        res.status(201).json({message:'Host created successfully',host:newHost});

    }
    catch(error){
        res.status(400).json({message:'Error creating host',error});
    }
};

exports.getHosts=async(req,res)=>{
    try{
        const hosts=await Host.find();
        res.status(200).json(hosts);
    }
    catch(error){
        res.status(400).json({message:'Error fetching hosts',error});
    }
};
//get single host
exports.getHostsById =async(req,res)=>{
    try{
        const host=await Host.findById(req.params.id);
        if(!host){
            return res.status(404).json({message:'Host not found'});
        }
        res.status(200).json(host);
    } catch(error){
        res.status(400).json({message:'Error fetching host',error});
    }
};

//update a host by id 
exports.updateHost =async(req,res)=>{
    try{
        const updateHost=await Host.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!updatedHost){
            return res.status(404).json({ message: 'Host not found' });
        }
        res.status(200).json({ message: 'Host updated successfully!', host: updatedHost });
    } catch (error) {
        res.status(400).json({ message: 'Error updating host', error });
    }   
};

//delete a host by id
exports.deleteHost = async (req, res) => {
    try {
        const deletedHost = await Host.findByIdAndDelete(req.params.id);
        if (!deletedHost) {
            return res.status(404).json({ message: 'Host not found' });
        }
        res.status(200).json({ message: 'Host deleted successfully!' });
    } catch (error) {
        res.status(400).json({ message: 'Error deleting host', error });
    }
};