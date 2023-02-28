import React from 'react'

const ESRDevelopment = () => {
  return (
    <div className='text-md ml-4 md:mt-2 mt-24'>
       <div class="my-6" id="DevelopmentStageintro">
                      <h1 class="text-xl font-bold my-3   ">Development of the Enhanced Single Registry</h1>
                      <p class="flex text-xl  ml-2 md:mx-4  ">
                        This section provides the methodologies used during the design and development of the ESR
                         and some of the key considerations based on lessons learned and best practices both during ESR
                        development and implementation, as well as lessons from other MIS and registry’s international
                         best practices highlighted in the lessons learnt and best practices chapter.
                      </p>
                      <p class="flex text-xl  ml-2 md:mx-4  ">
                        The development of the ESR has been an elaborate process that involved and offered a significant
                        learning experience for social protection actors within the Ministry of Labour and Social
                        Protection at the national government and county governments, the World Food Programme
                        (WFP), and other partners, including the Ministry of Health (MoH), Ministry of Interior (MoI), the
                        World Bank (WB), the Foreign, Commonwealth, and Development Office (FCDO), the United
                        Nations Children's Fund (UNICEF), the International Labour Organization (ILO), and the Food and
                        Agriculture Organization (FAO), among others who have an interest in the system.. Figure 3..1
                        provides the ESR architecture,.
                      </p>
                      <p class="italic flex text-sm text-blue-500  ml-2 md:mx-4">
                        Figure 3.1: Enhanced Single Registry architecture
                      </p>
                      <img src="assets/singleregistrymanual2.PNG" alt=""/>
                      <p class="italic flex text-sm text-blue-500  ml-2 md:mx-4">
                        Source: Single Registry manuala 
                      </p>
                    </div>
                    
                    <div class="my-6" id="ESRDevelopmentStage">
                      <h1 class="text-xl font-bold my-3   ">Background Of Social Protection In Kenya</h1>
                      <p class="flex text-xl  ml-2 md:mx-4  ">
                        The ESR system’s was built using the Agile Methodology where development is iteratively and
            incrementally executed by developing its components on a rolling basis, starting with
            establishment of Social protection Programmes MISs, establishment of Single Registry developed
            by linking the Programme MISs to create an integrated beneficiary registry, establishment of
            County Social Protection MIS, improvement of the data sharing module and linkage to the Integrated Population Registration System (IPRS) 34, development of the Analytics, Monitoring
            and Reporting functionality, design and development of the Complementarity module, the
            design and development of the Social Registry Module.
                      </p>
                      <p class="flex text-xl  ml-2 md:mx-4  ">
                        This Agile methodology 35was used to develop ESR in a modular approach (Modules developed
            on a rolling basis) which allowed developers to focus on keeping the process lean and goes
            through a number of iterations before anything is final. By building on top of the existing
            modules, it promotes flexibility and eases the system’s steady development into a more complex
            form.
                      </p>
                      <p class="italic flex text-sm text-blue-500  ml-2 md:mx-4">
                        Figure 3.2 below illustrates the development of each module in a format that summarizes the six
            phases:
                      </p>
                      <p class="italic flex text-sm text-blue-500  ml-2 md:mx-4 ">
                        Figure 3.2: Development Cycle
                      </p>
                      <img src="assets/devcycle.PNG" alt=""/>
                      <p class="flex text-xl  ml-2 md:mx-4  ">
                        Source: Author/consultant
                      </p>
                      <p class="flex text-xl  ml-2 md:mx-4  ">
                        The details of the phases are below:
                      </p>
                      <div class="md:ml-6 ml-3 text-gray-900 font-semi-bold">    
                        <p class="  my-3 ">&#9642; 
                          Feasibility Study: To explore possibility of developing and maintaining the ESR </p>
                        <p class="  my-3 ">
                      &#9642; Analysis and Requirements gathering: Providing detailed features of the ESR to be
                      developed
                        </p>
                        <p class="  my-3 "> 
                         &#9642; Design: Designing the ESR based on the analysis and requirements gathered.
                        </p>
                        <p class="  my-3 ">
                          &#9642; Development: Involves the development, programming and coding of ESR.
                        </p>
                        <p class="  my-3 "> &#9642; Piloting ESR: Piloting the ESR in the identified counties.</p>
                        <p class="  my-3 ">
                          &#9642; Implementation and rollout: National Rollout of the ESR.
                        </p>
                      </div>
                      <div class="my-6" id="Technology">
                        <h1 class="text-xl font-bold my-3   ">Technology</h1>
                          <p class="ml-4 my-3 font-bold">Hardware</p>
                          <p class="flex text-xl  ml-2 md:mx-4  ">
                            The ESR is hosted in the NSPS Data Centre located at the NSPS. The Data Centre has servers with
            adequate memory, disc space, and processing capacity.
                          </p>
                          <p class="ml-4 my-3 font-bold">Software</p>
                          <p class="flex text-xl  ml-2 md:mx-4  ">
                            All software development was done by an outsourced software firm, and hardware is maintained
                            by the ESR Unit Technical Team. DOTNET Core components are used in the application layer.
                            Business logic has been developed using C#. The system’s application layer includes Windows
                            2019 servers, Database layer, and Microsoft SQL Server as shown in the figure below:
                          </p>
                          <p class="flex text-xl  ml-2 md:mx-4  ">
                            Figure 3.3: ESR development software environment
                          </p>
                           <img src="assets/ESRSRS.PNG" alt=""/>
                      </div>
                    </div>

                    <div class="my-6" id="infosecurity">
                      <h1 class="text-xl font-bold my-3   ">Information Security and Data Protection Policies</h1>
                      <p class="flex text-xl  ml-2 md:mx-4  ">
                        Beyond the core staff of ESR Unit, the ESR is accessed by other Social Protection programmes
                        personnel, including social development officers both at national and county level, NGOs and
                        academia. The most risks associated with this kind of a system are corruption of data and
                        protection of privacy. The access to the data is highly controlled to prevent any tampering or
                        manipulation. Security is particularly important because the system contains both Person
                        identifying information (PII)and financial information for citizens. The ESR Unit has taken several
                        steps to secure access to the system and protect data.
                      </p>
                      <p class="flex text-xl  ml-2 md:mx-4  ">
                        Each user is given access to specific parts of the system based on their specific roles and
            responsibilities. This system prevents unauthorized persons from gaining access and allows the
            ESR Unit to monitor usage. All queries made in the system are logged which indicates the type
            of information that was queried, by whom, and on what date. Transactions in the system are
            logged and monitored for system audit purposes.
                      </p>
                      <p class="flex text-xl  ml-2 md:mx-4  ">
                        Controls are placed on the ability to edit data, making it impossible to update or delete records
            without authorization. The database is further controlled through data scripts following each
            update that will prompt and alert if data are inconsistent or if an error is detected. Authorized
            software developers are alerted of the error immediately.
                      </p>
                      <p class="flex text-xl  ml-2 md:mx-4  ">
                        The ESR MIS Unit staff who are responsible for providing database updates to ESR are given
                        access to the system via the VPN. Permission for this access is tied to the staff member’s computer
                        and is limited.
                      </p>
                      <p class="flex text-xl  ml-2 md:mx-4  ">
                        The system’s hardware is also protected with security measures, and system rooms are monitored
            by cameras and sensors. Unauthorized staffs are not allowed to enter the system rooms. Entry to
            the room is enabled through use of electronic access card and biometric reader for fingerprint
            verification.
                      </p>
            
                    </div>
            
                    <div class="my-6" id="userroles">
                      <h1 class="text-xl font-bold my-3   ">User Roles</h1>
                      <p class="flex text-xl  ml-2 md:mx-4  ">
                        User roles refer to a specific function that grants specific rights to a user or a user profile. The
            terms “user group roles” and “user roles” are used interchangeably.
                      </p>
                      <p  className='flex text-xl  ml-2 md:mx-4 '> Table 3.1 shows the eight
            user roles that are available in ESR</p>.
            
                      <p class="flex text-xl  ml-2 md:mx-4  ">
                        Table 3.1: User roles
                      </p>
                      <img src="assets/userroles.PNG" alt=""/>
                      <p>Source: ESR SRS</p>
                      <p class="flex text-xl  ml-2 md:mx-4  ">
                        A user profile can be granted to at least one user role. A user profile may be assigned to more
            than one user role or group role in any instance where a user can enter and approve data, but
            the user is not able to approve their own data record that they had entered into the ESR MIS. In
            all instances of approving data, a different user approves or rejects the submitted data record.
                      </p>
                      <p class="flex text-xl  ml-2 md:mx-4  ">
                        As one user profile may have access to more than one ESR MIS component, a user profile may
            be granted one set of rights for one software feature or module and a different set of rights for
            another software feature or module. For example, a user profile, such as a supervisor within the
            social registry component, can be granted Data Approval in the Registration module and may be
            granted Data View in the Grievances and Complaints Management module. The ESR MIS
            maintains a user access matrix that shows various user group roles assigned to the various user
            profiles and the ESR MIS components assigned to the various user profiles.
                      </p>
                    </div>
                    <div class="my-6" id="dataprotection">
                      <h1 class="text-xl font-bold my-3   ">Data Protection</h1>
                      <p class="flex text-xl  ml-2 md:mx-4  ">
                        Data protection is a set of strategies and processes used to secure the privacy, availability, and
            integrity of data. Additionally, it is essential for any organization that gathers, manages, or storage
            of sensitive data. The legislation on protection law outlines what has to be done to guarantee
            that everyone’s data is used properly and fairly. Best practice include that countries could comply
            to international data transfer and information privacy protocols, and implement legislations on
            collection, transfer, and storage of information. This becomes even more important where data
            is shared across a public network and several institutions. When data is exchanged across several
            organization and a public network, this becomes more crucial.
                      </p>
                    </div>
      
    </div>
  )
}

export default ESRDevelopment