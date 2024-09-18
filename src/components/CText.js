import React from 'react';
import ParticleEffect from './Title';

function CText() {
  const hS = {
    fontSize: '3.5vw',
    color: 'cyan', 
    marginBottom: '3rem',
    textAlign: "Center",
    marginTop: '5rem'
    
  };
  return (
    <>
      {/* <h1
        style={{
          position: 'absolute',
          top: '10vh',
          left: '50vw',
          transform: 'translateX(-50%)',
          color: 'white',
          fontSize: '7vw',
        }}
      >
        Codalo
      </h1> */}
      <ParticleEffect text='Codalo' cl={['#44a1a0', '#0d5c63', '#fffffa']} />
      <h2
        style={{
          position: 'absolute',
          top: '30vh',
          left: '50vw',
          transform: 'translateX(-50%)',
          color: 'white',
          fontSize: '2vw',
          width: '60vw',
          textAlign: 'center'

          
        }}
      >
        Grades 9-10
      </h2>





  

      <div
        style={{
          position: 'absolute',
          top: '40vh',
          left: '50vw',
          transform: 'translateX(-50%)',
          color: 'white',
          fontSize: '1.5vw',
          width: '60vw',
          textAlign: 'left',
        }}
        
      >
        <h2 style={hS}>1. Overview</h2>
        <p>
          This event provides a platform for young students to engage with robotics and artificial intelligence (AI), fostering collaboration, innovation, and global connectivity. 
          Participants will showcase their ideas across two exciting rounds: <strong>TITAN</strong> and <strong>ROBOT.IO</strong>. These rounds are designed to inspire problem-solving and teamwork.
        </p>

        <h2 style={hS}>2. Event Structure</h2>
        <p>
          <strong>Team Composition:</strong> Up to 6 members involved in programming and building the robot.
          <br />
          <strong>Event Timings:</strong>
          <ul>
            <li>9:30 am - 10:30 am: Round 1 - TITAN</li>
            <li>10:30 am - 10:45 am: Prep Time for Round 2</li>
            <li>10:45 am - 11:45 am: Round 2 - ROBOT.IO</li>
          </ul>
        </p>

        <h2 style={hS}>3. General Guidelines</h2>
        <p>
          <strong>Eligibility:</strong> Participants must be in grades 9-10
          <br />
          <strong>Registration:</strong> Teams must complete the online registration form by the specified deadline and submit all required documentation, including consent forms and project descriptions.
          <br />
          <strong>Project Guidelines:</strong>
          <ul>
            <li>Projects must adhere to STEM-based themes provided for each round.</li>
            <li>All projects must be original and developed specifically for the Codalo competition.</li>
            <li>Teams must explain their project, including objectives and methodologies, during their presentation.</li>
          </ul>
        </p>

        <h2 style={hS}>4. Event Details</h2>
        <p>
          <strong>Round 1: TITAN</strong> - Teams will present their robot design to a panel of judges. Each team will have 5 minutes for the presentation and 2 minutes for Q&A. Bonus points (+5) will be awarded if the robot addresses any of the SDG goals.
          <br /><br />
          <strong>Round 2: ROBOT.IO</strong> - This a robotic battle in which, there will be 2 teams, with 4 team members controlling the robot. The battle involves the robot competing with another team’s robot. Each hit on the robot from either of the sides is a point. EACH Battle table will have a judge/ timekeeper, with a criteria board to mark the points/score. The robot should be made By using Lego Spike or EV3 and should be controlled externally by a remote control ( Digital or Normal). The Scoreboard will be different from the rubrics mentioned.

        </p>

        <h2 style={hS}>5. Robot Specifications</h2>
        <p>
          <strong>Robot Size Limits:</strong>
          <ul>
            <li>Length: 30 cm</li>
            <li>Width: 16 cm</li>
            <li>Height: 15 cm</li>
          </ul>
        </p>

        <h2 style={hS}>6. Rules and Code of Conduct</h2>
        <p>
          <strong>Equipment:</strong> Only Lego EV3 or Spike can be used to build the robots. Any modifications must be pre-approved by the organizers.
          <br />
          <strong>Code of Conduct:</strong> All participants must display respect and sportsmanship. Unsportsmanlike behavior may lead to disqualification.
          <br />
          <strong>Disqualification:</strong> Violations of rules, cheating, or inappropriate conduct will result in disqualification.
        </p>

        <h2 style={hS}>7. Evaluation Criteria</h2>
        <table border="1" cellpadding="10" cellspacing="0" align="center">
          <tr>
            <th>Criteria</th>
            <th>Percentage</th>
          </tr>
          <tr>
            <td>Creativity</td>
            <td>25%</td>
          </tr>
          <tr>
            <td>Uniqueness</td>
            <td>25%</td>
          </tr>
          <tr>
            <td>Teamwork</td>
            <td>25%</td>
          </tr>
          <tr>
            <td>Q&A Response</td>
            <td>25%</td>
          </tr>
        </table>

        <h2 style={hS}>8. Intellectual Property</h2>
        <p>
          All intellectual property rights remain with the participants. The organizers reserve the right to use images and videos of the projects for promotional purposes.
        </p>
        <h2 style={hS}>Robot Reference Links</h2>
        <ul>
            <li><a href="https://youtu.be/La0KFxSwxyY?si=59XyuPeRFjhYiSDO" target="_blank">Robot Reference Video 1</a></li>
            <li><a href="https://youtu.be/y2HyhDMsc58?si=nyfS0Q0z8OFmLkYe" target="_blank">Robot Reference Video 2</a></li>
        </ul>

        <h2 style={hS}>FAQs</h2>
        <ul>
        <li>
            <span class="faq-question">What tools can we use?</span>
            <p>
                Participants should ONLY USE LEGO EV3 OR SPIKE (or both together). They can code the controller in any program. 
                Participants should use AI to CODE THE CONTROLLER. (Note: This question raises a concern, as building AI for the controller might not be realistic. Participants should control it manually.)
            </p>
        </li>

        <li>
            <span class="faq-question">How will we submit our projects?</span>
            <p>
                The submission of ROUND 1 presentations can be displayed on a smart board during the event.
            </p>
        </li>



        <li>
            <span class="faq-question">What is the Age/Grade group for CODALO?</span>
            <p>
                Grade 9, Grade 10, Year 10, Year 11.
            </p>
        </li>
      </ul>

      </div>
    </>
  );
}

export { CText };
