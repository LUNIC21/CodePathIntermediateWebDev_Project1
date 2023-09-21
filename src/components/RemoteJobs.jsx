import React from "react";
import Websites from "./JobList";
import builtinLogo from '../assets/Remote_Jobs/builtinLogo.jpg'
import flexjobLogo from '../assets/Remote_Jobs/FlexjobsLogo.svg'
import remotecoLogo from '../assets/Remote_Jobs/remoteCoLogo.png'
import remotehubLogo from '../assets/Remote_Jobs/remotehubLogo.png'

const RemoteJobs = () =>{
    return(
        <div className="RemoteJobs">
            <Websites type = 'remote' image = {builtinLogo} name = "BuiltIn" hyperlink = 'https://builtin.com/'/>
            <Websites type = 'remote' image = {flexjobLogo} name = "FlexJobs" hyperlink = 'https://www.flexjobs.com/'/>
            <Websites type = 'remote' image = {remotecoLogo} name = "Remote.Co" hyperlink = 'https://remote.co/'/>
            <Websites type = 'remote' image = {remotehubLogo} name = "RemoteHub" hyperlink = 'https://www.remotehub.com/'/>
        </div>
    )
}

export default RemoteJobs;