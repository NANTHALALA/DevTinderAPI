const adminAuth = (req,res,next)=>{
    const pwd = 'xyz';
    const isAdminAuthorized = (pwd === 'xyz') ? true : false;
    if(!isAdminAuthorized){
        res.status(401).send('Not an authorized user...');
    } else{
        next();
    }
}

const userAuth = (req,res,next)=>{
    const pwd = 'xyz';
    const isAdminAuthorized = (pwd === 'xyz') ? true : false;
    if(!isAdminAuthorized){
        res.status(401).send('Not an authorized user...');
    } else{
        next();
    }
}

module.exports = {adminAuth,userAuth};