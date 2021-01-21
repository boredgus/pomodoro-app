import React from "react";

export default function Faq() {
    document.title = "FAQ | TomoTimer";
    return (
        <main className="narrow-container">
            <section>
                <h2> What is TOMOTIMER? </h2>
                <p>
                    Tomotimer is a customizable pomodoro timer that works on desktop. The aim of this app is to help you focus on any task you are working on, such as study, writing, or coding.
                </p>
            </section>
            <section>
                <h2>What is Pomodoro technique?</h2>
                <p>
                    The Pomodoro Technique is a time management technique invented in the late 1980s by Francesco Cirillo and was named after a tomato shaped timer he used to track his work when he was a university student.
                </p>
                <p>
                    The idea is very simple: When faced with a large task, break it down into smaller individual tasks, break those tasks down into short time intervals (called "Pomodoros") and space them out by short and long breaks.
                </p>
                <p>
                    This makes you work in short sprints to make sure you are consistently being productive. And you also get to take regular breaks, which helps improve motivation and keeps you creative.
                </p>
            </section>
            <section>
                <h2>How to use it?</h2>
                <ol>
                    <li>Choose a task you want to accomplish.</li>
                    <li>Start the Pomodoro Timer.</li>
                    <li>Focus and work on the task until the signal sounds.</li>
                    <li>Take a short break (3-5 minutes).</li>
                    <li>Take a long break after every 4 completed Pomodoros.</li>
                </ol>
                <p className="postscriptum">
                    P.S.:: there are set default and common values, but you can customize any stage duration as you like in any moment.
                </p>
                <p className="postscriptum">
                    P.S.S.:: if you have any suggestions about how to update this app, give me know it in any comfortable for you way &#9660;
                </p>
            </section>
        </main>
    );
}