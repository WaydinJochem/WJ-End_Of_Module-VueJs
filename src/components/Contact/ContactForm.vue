<template>
    <section id="contact" class="container py-2 mx-auto bg-primary">
        <form action="https://formspree.io/f/mqkorbqv" method="POST">
            <div>
                <label>
                    Name:
                    <input type="text" name="phone-number" placeholder="input fullname" required>
                </label>
            </div>
            <div>
                <label>
                    Contact Number:
                    <input type="tel" name="phone-number" placeholder="input contact number" minlength="9" maxlength="13"
                        required>
                </label>
            </div>
            <div>
                <label>
                    Email:
                    <input type="email" name="email" placeholder="input email-address" required>
                </label>
            </div>
            <div>
                <label>
                    Your message:
                    <textarea name="message" cols="30" rows="6" placeholder="Input Text Messsage" required></textarea>
                </label>
            </div>
            <div>
                <button type="submit" id="sub-btn">Send</button>
            </div>
        </form>
    </section>
</template>
<script>
export default {

}
</script>
<style scoped>
#contact {
    background-image: radial-gradient(purple, black);
    border-radius: 20px;
    margin: 5%;
    text-align: center;
    color: white;
    animation: appear 3s ease-in infinite;
}
@media appear {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
div label {
    display: flex;
    flex-direction: column;
    align-items: center;
}

form div {
    margin-top: 1%;
}

label input {
    text-align: center;
    padding: 0.3%;
    font-size: large;
    border-radius: 20px;
}

label textarea {
    text-align: center;
    padding: 0.3%;
    font-size: large;
    resize: none;
    border-radius: 20px;
}

#sub-btn {
    border-radius: 20px;
    background-color: transparent;
    color: white;
}

#sub-btn:hover {
    font-size: large;
    background-image: linear-gradient(purple, violet);
}
@media only screen and (max-width: 400px) {
    textarea {
        width: 250px;
    }
}
</style>