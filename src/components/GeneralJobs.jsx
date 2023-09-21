import React from "react";
import Websites from "./JobList";
import linkedInLogo from '../assets/General_Jobs/LinkedInLogo.png'
import monsterLogo from '../assets/General_Jobs/MonsterLogo.png'
import indeedLogo from '../assets/General_Jobs/IndeedLogo.png'
import glassdoorLogo from '../assets/General_Jobs/glassdoorLogo.png'
import handshakeLogo from '../assets/General_Jobs/handshakeLogo.png'
import wellfoundLogo from '../assets/General_Jobs/wellfoundLogo.png'
import ctiLogo from '../assets/General_Jobs/ctiLogo.png'

const GeneralJobs = () =>{
    return(
        <div className="GeneralJobs">
            <Websites type = 'general' image = {linkedInLogo} name = "LinkedIn" hyperlink = 'https://www.linkedin.com/'/>
            <Websites type = 'general' image = {monsterLogo} name = "Monster" hyperlink = 'https://www.monster.com/'/>
            <Websites type = 'general' image = {indeedLogo} name = "Indeed" hyperlink = 'https://www.indeed.com/'/>
            <Websites type = 'general' image = {glassdoorLogo} name = "Glassdoor" hyperlink = 'https://www.glassdoor.com/index.htm'/>
            <Websites type = 'general' image = {handshakeLogo} name = "Handshake" hyperlink = 'https://joinhandshake.com/'/>
            <Websites type = 'general' image = {wellfoundLogo} name = "Wellfound" hyperlink = 'https://wellfound.com/'/>
            <Websites type = 'general' image = {ctiLogo} name = "CTI Accelerate" hyperlink = 'https://computingtalentinitiative.org/accelerate/'/>
        </div>
    )
}

export default GeneralJobs;