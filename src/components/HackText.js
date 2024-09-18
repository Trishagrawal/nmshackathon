import React from 'react';
import ParticleEffect from './Title';  
import { hover } from '@testing-library/user-event/dist/hover';

function HackText() {
  const hS = {
    fontSize: '3.5vw',
    color: 'cyan', 
    marginBottom: '5rem',
    textAlign: "Center",
    marginTop: '5rem'
  };
  const hD = {
    fontSize: '3.5vw',
    color: '#FFC000', 
    marginBottom: '5rem',
    textAlign: "Center",
    marginTop: '5rem'
  };

  const buttonStyle = {
    margin: '20px',
    padding: '10px 20px',
    fontSize: '1.5vw',
    backgroundColor: '#44a1a0',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    
  };

  return (
    <>
      {/* Main Hackathon Title */}
      <ParticleEffect text='Hackathon' cl={['#44a1a0', '#0d5c63', '#fffffa']} />

      <h2
        style={{
          position: 'absolute',
          top: '40vh',
          left: '50vw',
          transform: 'translateX(-50%)',
          color: 'white',
          fontSize: '2vw',
          width: '60vw',
          textAlign: 'center',
        }}
      >
        Grades 9-12
      </h2>

      {/* Buttons to Navigate to Track 1 and Track 2 */}
      <div
        style={{
          position: 'absolute',
          top: '50vh',
          left: '50vw',
          transform: 'translateX(-50%)',
          textAlign: 'center',
        }}
      >
        <a href="#track1">
          <button style={buttonStyle}> <strong>TRACK 1</strong><br/>Grades 11-12</button>
        </a>
        <a href="#track2">
          <button style={buttonStyle}><strong>TRACK 2</strong><br/>Grades 9-10</button>
        </a>
      </div>

      {/* Track 1 Section */}
      <div
        id="track1"
        style={{
          position: 'absolute',
          top: '90vh',
          left: '50vw',
          transform: 'translateX(-50%)',
          color: 'white',
          fontSize: '1.5vw',
          width: '60vw',
          textAlign: 'left',
        }}
      >
        <h2 style={{
          fontSize: '3.5vw',
          color: 'cyan', 
          marginBottom: '1rem',
          textAlign: "Center",
          marginTop: '5rem'
        }}>TRACK 1</h2>
        
        <p style={{
          textAlign:"center",
          fontSize:"2vw"
        }}>
          Grades 11-12

        </p>
        <h2 style={hS}>1. Overview</h2>
        <p>
        The hackathon is designed to assess participants' ability to address real-world challenges by applying their expertise in various programming languages to solve problems that reflect industry standards. Emphasizing creativity and practical implementation, the competition encourages the development of innovative solutions. Through this process, participants will strengthen their problem-solving skills and demonstrate their capacity to meet professional demands.
        </p>

        <h2 style={hS}>2. Hackathon Structure</h2>
        <ul>
          <li><strong>Individual Participation:</strong> This hackathon allows only individual entries; team participation is not permitted.</li><br/>
          <li><strong>Eligibility:</strong> The competition is open to high school students in Grades 11 and 12 who possess prior programming knowledge.</li>
        </ul>


        <h2 style={hS}>3. General Guidelines</h2>
        <ul>
          <li><strong>Project Submission:</strong> Participants must submit their projects through GitHub in a .zip format or other verified alternatives, accompanied by comprehensive documentation.</li><br/>
          <li><strong>Timeliness:</strong> All submissions must be completed within the specified deadline. Submissions in the incorrect format or those submitted after the deadline will not be accepted.</li>
        </ul>


        <h2 style={hS}>4. Evaluation Criteria</h2>
        <table border="1" cellpadding="10" cellspacing="0" align='center'>
            <tr>
                <th>Criteria</th>
                <th>Weightage</th>
            </tr>
            <tr>
                <td>Problem Understanding</td>
                <td>10%</td>
            </tr>
            <tr>
                <td>Solution Design</td>
                <td>20%</td>
            </tr>
            <tr>
                <td>Coding Skills</td>
                <td>20%</td>
            </tr>
            <tr>
                <td>Integration</td>
                <td>10%</td>
            </tr>
            <tr>
                <td>Innovation</td>
                <td>20%</td>
            </tr>
            <tr>
                <td>Adaptability</td>
                <td>20%</td>
            </tr>
        </table>


        <h2 style={hS}>5. Sample Question</h2>
        <p>
          Q. Text Justification: Given an array of strings and a width `maxWidth`, format the text such that each line has exactly `maxWidth` characters and is fully (left and right) justified.
          
        </p>

        <h2 style={hS}>6. Learning Resources</h2>
        <p>
         Participants are permitted to use Python, C++, C, Java, or any other programming language of their preference. Competency in the chosen language is expected for successful completion of the tasks.
          
        </p>

        <h2 style={hS}>7. Resources and Tools</h2>
        <p>
        

               Participants are allowed to use any valid Integrated Development Environment (IDE) for writing and developing their code.
          
        </p>



        <h2 style={hS}>8. Code of Conduct</h2>
        <ul>
          <li><strong>Professional Conduct:</strong> Participants are expected to maintain a high standard of professionalism and mutual respect towards fellow competitors and volunteers throughout the event. Adherence to all anti-plagiarism regulations is mandatory.</li><br/>
          <li><strong>Penalties for Misconduct:</strong> Any violation of submission protocols, including failure to comply with code submission methods, time constraints, or anti-plagiarism policies, will result in immediate disqualification.</li><br/>
          <li><strong>Submission Timeliness:</strong> All responses must be submitted within the allotted timeframe. While a buffer period may be provided, any submissions received after this period will not be considered for evaluation.</li><br/>
          <li><strong>Generative AI Prohibition:</strong> The use of Generative AI in code submissions is strictly prohibited. Detection of such usage will result in automatic disqualification from the competition.</li><br/>
        </ul>


        <h2 style={hS}>9. FAQs</h2>
        <ul>
          <li><strong>Q: Will the Hackathon have different rounds?</strong>
          A: No, the Hackathon will consist of a single round divided into three distinct levels (Level-1, Level-2, Level-3).</li><br/>

          <li><strong>Q: How do we submit the answers?</strong>
          A: Projects must be submitted via GitHub in .zip format or other verified alternatives, accompanied by appropriate documentation.</li><br/>

          <li><strong>Q: What does the correction team mainly look for in your answers (judging criteria)?</strong>
          A: The correction team evaluates the functionality of the code, emphasizing not only its operational correctness but also its clarity and readability. Demonstrated technical proficiency and thoughtful problem-solving are highly valued.</li><br/>

          <li><strong>Q: Will the use of external libraries be allowed, and is it necessary?</strong>
          A: The use of external libraries is permitted but not required. Participants may choose to use external libraries at their discretion. However, most of the questions should be solvable without the need for external libraries.</li><br/>
        </ul>

      </div>

      {/* Track 2 Section */}
      <div
        id="track2"
        style={{
          position: 'absolute',
          top: '650vh',
          left: '50vw',
          transform: 'translateX(-50%)',
          color: 'white',
          fontSize: '1.5vw',
          width: '60vw',
          textAlign: 'left',
        }}
      >
        <h2 style={{
          fontSize: '3.5vw',
          color: '#FFC000', 
          marginBottom: '1rem',
          textAlign: "Center",
          marginTop: '5rem'
        }}>TRACK 2</h2>
        
        <p style={{
          textAlign:"center",
          fontSize:"2vw"
        }}>
          Grades 9-10

        </p>
        
        <h2 style={hD}>1. Overview</h2>
        <p>
          This part of the hackathon assesses participants' skills in designing and coding Arduino-based solutions using Tinkercad, focusing on practical problem-solving and technical proficiency.
          
        </p>

        <h2 style={hD}>2. Event Structure</h2>
        <p>
          <strong>FORMAT : Individual participation</strong><br/>
          Single round hackathon (2hr) difficulty Level for each questions will be progressive.
          <ul>
            <li><strong>Design:</strong> Participants must use Tinkercad to design and simulate their circuits. Must use all the components specified in each task.</li><br/>
            <li><strong>Code:</strong> Write and test Arduino code to implement the functionalities described in the tasks.</li><br/>
            <li><strong>Document (Optional):</strong>Prepare documentation that explains the design and code.</li><br/>
            <li><strong>NOTE:</strong> All tasks must be submitted through Tinkercad and must be functional at the time of evaluation</li><br/>
          </ul>
          
        </p>

        <h2 style={hD}>3. General Guidelines</h2>
        <p>
          <strong>Eligibility:</strong> Open to high school students (Grade 9 and 10), beginner to intermediate C++ Arduino skills.
          <br />
          <strong>Rules & Regulations:</strong>
          <ul>
            <li>Participants must use original work and are allowed to use external resources, provided they cite them properly.
            </li>
            <li>No use of any AI applications
            </li>
            <li>The format for submission will be shared during the event, and participants must follow the instructions carefully to ensure their submission is valid.</li>
            <li>Code must be in C++, no block coding is allowed</li>
          </ul>
          <strong>Submission:</strong> Submit tasks via the provided forms link.
          
        </p>

        <h2 style={hD}>4. Evaluation Criteria</h2>
        <table border="1" cellpadding="10" cellspacing="0" align='center'>
        <thead>
            <tr>
                <th>Criteria</th>
                <th>Weightage</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>The flow of the circuit design on Tinkercad</td>
                <td>30%</td>
            </tr>
            <tr>
                <td>Accuracy of the code concerning a task</td>
                <td>40%</td>
            </tr>
            <tr>
                <td>Fulfilment of using all the components in a task</td>
                <td>10%</td>
            </tr>
            <tr>
                <td>The overall functionality of the Project</td>
                <td>20%</td>
            </tr>
        </tbody>
        </table>

        <h2 style={hD}>5. Sample Challenges</h2>
        <p>
          Task : Design an Arduino-controlled robotic system that moves forward and responds to objects detected by a distance sensor with the following behaviours:<br/>
          <ul>
            <li>Full Speed Movement: The robot should move forward at full speed when no object is detected within 100 cm.</li><br/>
            <li>Reduced Speed: If an object is detected within a distance of 60-100 cm, the robot should reduce its speed.</li><br/>
            <li>Stop and Alert: If an object is detected at a distance of less than 60 cm, the robot should come to a complete stop and activate a buzzer to alert the condition.</li><br/>
            
          </ul>
          Essential components:
          <ul>
            <li><strong>Arduino Board:</strong> Arduino Uno</li>
            <li><strong>Distance Sensor:</strong> Ultrasonic sensor (HC-SR04)</li>
            <li><strong>Motor Driver:</strong> Motor driver (L293D IC recommended)</li>
            <li><strong>DC Motors:</strong> DC motor with compatible motor driver in Tinkercad</li>
            <li><strong>Motor Wheels:</strong> Attached to the DC motors (simulate as part of the motor setup)</li>
            <li><strong>Buzzer:</strong> Buzzer (for sound alert)</li>
          </ul>

          
        </p>

        <h2 style={hD}>6. Learning Resources/ Tools</h2>
        <p>
          Participants should know C++, component functionalities, and familiarize themselves with Tinkercad and Arduino.
          
        </p>

        

        <h2 style={hD}>7. Code of Conduct</h2>
        <p>
          <ul>
            <li><strong>Event Etiquette:</strong> Maintain professionalism, respect teammates, and adhere to anti-plagiarism policies.
            </li>
            <li><strong>Misconduct Penalties:</strong> Code submission method, Time violation and etc Teams violating rules will face disqualification</li>
          </ul>
          
        </p>
        <h2 style={hD}>8. FAQs</h2>
        
        <p>
            <strong>How do I access Tinkercad for the competition?</strong><br />
            You can access Tinkercad by visiting <a href="https://www.tinkercad.com" target="_blank">tinkercad.com</a>. You will need to create a free personal account if you don’t already have one.
        </p>



        <p>
            <strong>How should I submit my project?</strong><br />
            Once you have completed your circuit and coding in Tinkercad:
            <ul>
                <li>Save your project.</li>
                <li>Generate a shareable view-only link. To do this, click on the “Share” button in Tinkercad, select "Can view" permissions, and copy the link.</li>
                <li>Submit the link through the designated submission platform or email provided for the hackathon.</li>
            </ul>
        </p>

        <p>
            <strong>Can I use external libraries or code snippets?</strong><br />
            Yes, you can use external libraries and code snippets as long as they are compatible with Tinkercad and adhere to the competition rules. Make sure to test and verify their functionality within Tinkercad.
        </p>

        <p>
            <strong>Are there any restrictions on circuit complexity?</strong><br />
            While there are no specific restrictions on circuit complexity, your design should be functional and relevant to the given problem. Keep in mind that simplicity and clarity can be advantageous.
        </p>
          
          
       
      </div>
    </>
  );
}

export { HackText };
