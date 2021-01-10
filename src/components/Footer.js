import React from "react";

export default function Footer(props) {
    return (
        <footer>
            <div className="contacts">
                <a href="https://telegram.me/kotank" target="_blank" rel="noreferrer">
                    <img 
                        src="https://cdn3.iconfinder.com/data/icons/popular-services-brands-vol-2/512/telegram-512.png" 
                        alt="Telegram"
                    />
                </a>
                <a href="https://github.com/boredgus" target="_blank" rel="noreferrer">
                    <img 
                        src="https://icon-library.com/images/github-icon-white/github-icon-white-6.jpg" 
                        alt="GitHub"
                    />
                </a>
                <a href="mailto:daha.kyiv@gmail.com" target="_blank" rel="noreferrer">
                    <img 
                        src="https://image.flaticon.com/icons/png/512/281/281769.png" 
                        alt="Gmail" 
                    />
                </a>
            </div>
        </footer>
    );
}