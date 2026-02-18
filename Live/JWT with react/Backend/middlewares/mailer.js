const nodemailer = require("nodemailer")

const transport = nodemailer.createTransport({
    service : "gmail",
    auth:{
        user :"jensipatel369@gmail.com",
        pass : "vgoevqkxmayumuca"
    }
})


module.exports.sendOtp = (email,otp)=>{
    let mailoptions = {
        to : email,
        from : "jensipatel369@gmail.com",
        subject : "Password Reset OTP",
        text : `Your password reset otp is ${otp}`
    }

    transport.sendMail(mailoptions)
}