import { useState } from "react"
import emailjs from "@emailjs/browser"
import Alert from "../components/Alert"
import { Particles } from "../components/Particles"

const Contact = () => {
    const[formData, setFormData] = useState({name:"", email:"", message:""})
    const [isLoading, setIsLoading] = useState(false)
    const [showAlert, setShowAlert] = useState(false)
    const [alertType, setAlertType] = useState("success")
    const [alertMessage, setAlertMessage] = useState("")
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        try{
            console.log("Form Data:", formData)
            await emailjs.send("service_c69ec3t","template_naldmnr",{
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
            to_email: "khushalnirwal@gmail.com"
        }, "CrSZLbTQgaIwJ0KDD")
        setIsLoading(false)
        setFormData({name:"", email:"", message:""})
        setAlertType("success")
        setAlertMessage("Message sent successfully!")
        setShowAlert(true)
        }
        catch(error){
            setIsLoading(false)
            console.error("Email sending error:", error)
            setAlertType("error")
            setAlertMessage("Failed to send message. Please try again later.")
            setShowAlert(true)
        }
        

    }
  return (
    <section id="contact" className='relative flex items-center c-space section-spacing'>
        {showAlert && <Alert type={alertType} text={alertMessage} />}
        <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color={"#ffffffff"}
        refresh
      />
        <div className="flex flex-col items-center justify-center max-w-md p-8 mx-auto border border-terminal/20 rounded-2xl bg-gradient-to-b from-indigo/80 to-primary shadow-[0_0_50px_rgba(74,222,128,0.05)]">
            <div className='flex flex-col items-start w-full gap-5 mb-10'>
                <h2 className="text-heading">Get In <span className="text-terminal">Touch</span></h2>
                <p className="font-normal text-text-muted">Feel free to reach out to me!</p>
            </div>
            <form className="w-full" onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label htmlFor="name" className="field-label">Full Name</label>
                    <input id="name" name="name" type="text" className="field-input field-input-focus" placeholder="Your full name" autoComplete="name" value={formData.name} onChange={handleChange}/>
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="field-label">Email</label>
                    <input id="email" name="email" type="email" className="field-input field-input-focus" placeholder="Your email address" autoComplete="email" value={formData.email} onChange={handleChange}/>
                </div>
                <div className="mb-5">
                    <label htmlFor="message" className="field-label">Message</label>
                    <textarea id="message" name="message" className="field-input field-input-focus" rows={4} placeholder="Your message here..." autoComplete="off" value={formData.message} onChange={handleChange}/>
                </div>
                <button type="submit" className="w-full py-3 text-lg font-medium text-center rounded-lg cursor-pointer bg-gradient-to-r from-coral to-coral-dim text-white hover:shadow-[0_0_25px_rgba(234,72,132,0.4)] transition-all duration-300">
                    {!isLoading? "Send": "Sending..."}
                </button>
            </form>
        </div>
    </section>
  )
}

export default Contact