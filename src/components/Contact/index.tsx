import { useState } from "react";

const Contact = () => {
    const [mailerState, setMailerState] = useState({
        name: "",
        email: "",
        message: "",
    });

    function handleStateChange(e: any) {
        setMailerState((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
    }

    const submitEmail = async (e: any) => {
        e.preventDefault();
        console.log({ mailerState });
        const response = await fetch("http://localhost:3001/sendmail", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ mailerState }),
        })
          .then((res) => res.json())
          .then(async (res) => { //providing an alert accordingly
                const resData = await res;
                console.log(resData);
                if (resData.status === "success") {
                    alert("Message Sent");
                } else if (resData.status === "fail") {
                    alert("Message failed to send");
                }
            })
          .then(() => {
            setMailerState({
              email: "",
              name: "",
              message: "",
            });
          });
    };
    return (
        <div>
            <form
                style={{
                    display: "flex",
                    height: "100vh",
                    justifyContent: "center",
                    alignItems: "center",
                }}
                onSubmit={submitEmail}
            >
                <fieldset
                    style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    width: "50%",
                    }}
                >
                    <legend>React NodeMailer Contact Form</legend>
                    <input
                        placeholder="Name"
                        onChange={handleStateChange}
                        name="name"
                        value={mailerState.name}
                    />
                    <input
                        placeholder="Email"
                        onChange={handleStateChange}
                        name="email"
                        value={mailerState.email}
                    />
                    <textarea
                        style={{ minHeight: "200px" }}
                        placeholder="Message"
                        onChange={handleStateChange}
                        name="message"
                        value={mailerState.message}
                    />
                    <button>Send Message</button>
                </fieldset>
            </form>
        </div>
    )
}

export default Contact