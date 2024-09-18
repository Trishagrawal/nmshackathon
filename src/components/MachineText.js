import React from 'react';
import ParticleEffect from './Title';

function MachineText() {
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
          width: '60vw',
          textAlign: 'center'
          
          
        }}
      >
        Machine Learning 
      </h1> */}
      <ParticleEffect text='Machine Learning' cl={['#44a1a0', '#0d5c63', '#fffffa']} />
      <h2
        style={{
          position: 'absolute',
          top: '35vh',
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
          textAlign: 'left'
        }}
      >
        <h2 style={hS}>1. Overview</h2>
            <p>
             This hackathon sub-event challenges participants to develop a machine learning model for object detection. Teams will use provided mock code to train their models on image datasets. A final test image, containing a partially obscured object, will be supplied by the organizers. The goal is to create a model that accurately detects the hidden object. This event focuses on applying machine learning concepts to practical problems, encouraging creativity, problem-solving, and teamwork among beginners.
            </p>

            <h2 style={hS}>2. Event Structure</h2>
            <p>
                <strong>Challenge Focus:</strong> Machine learning-based object detection using images, where models must identify hidden objects within a complex test image.
                <br />
                <strong>Team Composition:</strong> Teams of 2-3 members, with each member taking on one or more of the following roles:
            </p>
            <ul>
                <li>Developer: Focuses on coding and model training.</li>
                <li>Data Handler: Sources and organizes image datasets for training.</li>
            </ul>
            
            

            <h2 style={hS}>3. General Guidelines</h2>
            <p>
                <strong>Eligibility:</strong> Open to high school students in grades 9-10 with beginner to intermediate knowledge of machine learning.
                <br />
                <strong>Rules & Regulations:</strong>
            </p>
            <ul>
                <li>Teams will present their trained model directly to the judge during the event.</li>
                <li>The judge will test the model and question teams on its design, training process, and functionality.</li>
                <li>Participants must be ready to discuss the model's development, including dataset selection, training outcomes, and critical decisions made.</li>
            </ul>

            <h2 style={hS}>4. Evaluation Criteria</h2>
            <table border="1" cellpadding="10" cellspacing="0" align='center'>
                <tr>
                    <th>Criteria</th>
                    <th>Percentage</th>
                </tr>
                <tr>
                    <td>Model Accuracy</td>
                    <td>40%</td>
                </tr>
                <tr>
                    <td>Quality of Image Dataset</td>
                    <td>20%</td>
                </tr>
                <tr>
                    <td>Model Efficiency</td>
                    <td>15%</td>
                </tr>
                <tr>
                    <td>Presentation & Explanation</td>
                    <td>15%</td>
                </tr>
                <tr>
                    <td>Proper Documentation</td>
                    <td>10%</td>
                </tr>
            </table>

            <h2 style={hS}>5. Sample Challenge</h2>
            <p>
                <strong>Challenge Focus:</strong> Participants will train a machine learning model to detect hidden objects within images. There will be two rounds: Round 1 will focus on identifying a hidden object from an image, while Round 2 will provide more challenging and obscured images for further testing.
            </p>

            <h2 style={hS}>6. Learning Resources</h2>
            <p>
                <strong>Self-Guided Session:</strong> Participants will have 30 minutes to review a pre-provided mock code independently. No formal teaching will be provided; participants must analyze the code, understand its functionality, and make necessary modifications to execute and train their models.
            </p>

            <h2 style={hS}>7. Approach to the Event</h2>
            <p>
                <strong>Time Management:</strong>
            </p>
            <ul>
                <li>First 15 minutes: Initial setup and briefing</li>
                <li>Next 30 minutes: Code review session</li>
                <li>Next 45 minutes: Round 1 - Image collection and model training</li>
                <li>Next 30 minutes: Round 2 - Refinement, testing, and model submission</li>
            </ul>
            <p>
                <strong>Team Collaboration:</strong> Each team member should focus on their assigned roles, ensuring efficient teamwork during both rounds.
            </p>

            <h2 style={hS}>8. Resources and Tools</h2>
            <p>
                <strong>Development Tools:</strong> Participants will have access to a platform supporting model training, image uploading, and result submission. Teams will be briefed on how to use the platform during the initial session.
            </p>
            <p>
                <strong>Libraries/Modules:</strong> Pre-configured image processing and machine learning modules (e.g., OpenCV, TensorFlow, or PyTorch) will be available on the platform to streamline development.

            </p>



            <h2 style={hS}>12. Code of Conduct</h2>
            <p>
                <strong>Event Etiquette:</strong> Participants must collaborate respectfully and maintain professionalism throughout the event.
                <br />
                <strong>Penalties for Misconduct:</strong> Late submissions or failure to follow the prescribed format may result in disqualification.
            </p>

            <h2 style={hS}>13. FAQs</h2>
            <p>
                <strong>Can we modify the provided code completely, or are there restrictions?</strong><br/>
                You are free to modify the provided code as much as necessary to improve its performance. However, the core functionality of object detection must remain intact.
            </p>
            <p>
                <strong>What prior knowledge is required to participate?</strong><br/>
                Participants should have a basic understanding of Python and familiarity with libraries such as OpenCV and TensorFlow. Advanced machine learning knowledge is not required.
            </p>


        
      </div>
    </>
  );
}

export { MachineText };
