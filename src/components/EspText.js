import React from 'react';
import ParticleEffect from './Title';

function EspText() {
  const hS = {
    fontSize: '3.5vw',
    color: 'cyan', 
    marginBottom: '3rem',
    textAlign: "Center",
    marginTop: '5rem'
    
  };
  return (
    <>
      <ParticleEffect text="Esports" cl={['#44a1a0', '#0d5c63', '#fffffa']}/>
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
        Grades 9-12
      </h2>
      

      <div
        style={{
          position: 'absolute',
          top: '50vh',
          left: '50vw',
          transform: 'translateX(-50%)',
          color: 'white',
          fontSize: '1.5vw',
          width: '60vw',
          textAlign: 'left'
        }}
      >
      

        <h2 style={hS}>1. Esports Structure</h2>
        <ul>
          <li><strong>Track:</strong> FC24 Kick Off Mode (1v1)</li><br/>
          <li><strong>Team Composition:</strong> Individual participation only, with no teams allowed. Participants may choose any football club for gameplay, except Soccer Aid.</li>
        </ul>

        <h2 style={hS}>2. General Guidelines</h2>
        <p>
          <strong>Eligibility:</strong> Open to high school students in Grades 9-12
          <br />
          <strong>Rules & Regulations:</strong><br/> 
        </p>
        <ul>
          <li><strong>Referee Decisions:</strong> All decisions made by the in-game referee are final and cannot be contested.</li>
          <li><strong>Pauses:</strong> Players are limited to a maximum of two pauses per half.</li>
          <li><strong>Liability for Damages:</strong> Any damage caused to equipment will be the sole responsibility of the player, who will be liable for any associated costs.</li>
          <li><strong>Rematches:</strong> Rematches will only be granted in emergency situations; otherwise, they are not permitted.</li>
        </ul>


        <h2 style={hS}>3. Evaluation Criteria</h2>
        <p>
         Matches will follow a knockout bracket format with 32 participants. The winner of each match advances to the next round, continuing until a final champion is determined.
        </p>

        <h2 style={hS}>4. Learning Resources</h2>
        <p>Basic Skills: Participants should have experience playing FIFA on a console, preferably on a PS4 or PS5.</p>

        <h2 style={hS}>5. Approach to the Esports tournament</h2>
        <p>
          <strong >Time Management:</strong> Participants should allocate sufficient time for squad preparation before the match.
          <br /><br />
          <strong>Team Collaboration:</strong> Collaboration between opponents is strictly prohibited. Any form of match-fixing will result in immediate disqualification.
        </p>

        



        

        <h2 style={hS}>6. Code of Conduct</h2>
        <p>
          <strong>Event Etiquette:</strong> Participants are expected to maintain professionalism, show respect towards their opponents, and strictly adhere to all anti-violence policies.
          <br /><br />
          <strong>Misconduct Penalties:</strong> Any violations of time limits or unauthorized restarts without organizer approval will result in immediate disqualification.
          </p>

        <h2 style={hS}>7. FAQs</h2>
        <p>
        <ul>
          <li><strong>Which mode are we playing on and can I use any team?</strong><br/>
          The tournament will be played in Kick Off mode, not Ultimate Team. You may use any team, including national teams, except for Soccer Aid FC.</li><br/>

          <li><strong>Is esports an individual or group event?</strong><br/>
          The esports competition will be an individual event. However, multiple participants from the same school may register.</li><br/>

          <li><strong>Will devices be provided?</strong><br/>
          No devices will be provided except for the consoles used for esports. Participants should bring their own devices.</li><br/>

          <li><strong>Will restarting be allowed?</strong><br/>
          Restarting a match that has already begun will not be permitted under any circumstances.</li><br/>

          <li><strong>Are we allowed setup time?</strong><br/>
          Participants will have 1 minute for team selection and squad setup, and this time will be strictly monitored.</li>
        </ul>

          
          
          
          
          
        </p>
      </div>
    </>
  );
}

export { EspText };
