// import { Standard } from "../standard.model";

// export const CMMC: Standard = {

//     metadata:{
//         name: "CMMC",
//         version:"1.0",
//         year: "2020",
//         alt_question:""
//     },

//     domains:[
//         {
//             cid:"1",
//             type: "domain",
//             title: "ACCESS CONTROL",
//             isLeaf_control:false,
//             child_controls:[
//                 {
//                     cid:"1.001",
//                     type:"control",
//                     title:"Limit system access to authorized users, processes acting on behalf of authorized users, and devices (including other systems)",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"1.001.a",
//                             type:"control",
//                             title:"Authorized users are identified.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Authorized users are identified.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"1.001.b",
//                             type:"control",
//                             title:"Processes acting on behalf of authorized users are identified.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Processes acting on behalf of authorized users are identified.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"1.001.c",
//                             type:"control",
//                             title:"Devices (and other systems) authorized to connect to the system are identified.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Devices (and other systems) authorized to connect to the system are identified.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"1.001.d",
//                             type:"control",
//                             title:"System access is limited to authorized users.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"System access is limited to authorized users.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"1.001.e",
//                             type:"control",
//                             title:"System access is limited to processes acting on behalf of authorized users.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"System access is limited to processes acting on behalf of authorized users.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"1.001.f",
//                             type:"control",
//                             title:"System access is limited to authorized devices (including other systems)",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"System access is limited to authorized devices (including other systems)",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 },
//                 {
//                     cid:"1.002",
//                     type:"control",
//                     title:"Limit system access to the types of transactions and functions that authorized users are",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [

//                         {
//                             cid:"1.002.a",
//                             type:"control",
//                             title:"The types of transactions and functions that authorized users are permitted to execute are defined.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"The types of transactions and functions that authorized users are permitted to execute are defined.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"1.002.b",
//                             type:"control",
//                             title:"System access is limited to the defined types of transactions and functions for authorized users.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"System access is limited to the defined types of transactions and functions for authorized users.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 },
//                 {
//                     cid:"2.016",
//                     type:"control",
//                     title:"Control the flow of CUI in accordance with approved authorizations.",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"2.016.a",
//                             type:"control",
//                             title:"Information flow control policies are defined.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Information flow control policies are defined.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.016.b",
//                             type:"control",
//                             title:"Methods and enforcement mechanisms for controlling the flow of CUI are defined.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Methods and enforcement mechanisms for controlling the flow of CUI are defined.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.016.c",
//                             type:"control",
//                             title:"Designated sources and destinations (e.g., networks, individuals, and devices) for CUI within the system and between interconnected systems are identified.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Designated sources and destinations (e.g., networks, individuals, and devices) for CUI within the system and between interconnected systems are identified.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.016.d",
//                             type:"control",
//                             title:"Authorizations for controlling the flow of CUI are defined.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Authorizations for controlling the flow of CUI are defined.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.016.e",
//                             type:"control",
//                             title:"Approved authorizations for controlling the flow of CUI are enforced.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Approved authorizations for controlling the flow of CUI are enforced.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 },
//                 {
//                     cid:"3.017",
//                     type:"control",
//                     title:"Separate the duties of individuals to reduce the risk of malevolent activity without collusion. ",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls:  [
//                         {
//                             cid:"3.017.a",
//                             type:"control",
//                             title:"The duties of individuals requiring separation are defined.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"The duties of individuals requiring separation are defined. ",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"3.017.b",
//                             type:"control",
//                             title:"Responsibilities for duties that require separation are assigned to separate individuals.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Responsibilities for duties that require separation are assigned to separate individuals. ",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"3.017.c",
//                             type:"control",
//                             title:"Access privileges that enable individuals to exercise the duties that require separation are granted to separate individuals",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Access privileges that enable individuals to exercise the duties that require separation are granted to separate individuals.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 },
//                 {
//                     cid:"2.007",
//                     type:"control",
//                     title:"Employ the principle of least privilege, including for specific security functions and privileged accounts.",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"2.007.a",
//                             type:"control",
//                             title:"Privileged accounts are identified.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Privileged accounts are identified.  ",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.007.b",
//                             type:"control",
//                             title:"Access to privileged accounts is authorized in accordance with the principle of least privilege.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Access to privileged accounts is authorized in accordance with the principle of least privilege.  ",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.007.c",
//                             type:"control",
//                             title:"Security functions are identified",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Security functions are identified. ",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.007.d",
//                             type:"control",
//                             title:"Access to security functions is authorized in accordance with the principle of least privilege",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Access to security functions is authorized in accordance with the principle of least privilege. ",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }

//                     ]
//                 },
//                 {
//                     cid:"2.008",
//                     type:"control",
//                     title:"Use non-privileged accounts or roles when accessing nonsecurity functions.",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"2.008.a",
//                             type:"control",
//                             title:"Nonsecurity functions are identified.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Nonsecurity functions are identified.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.008.b",
//                             type:"control",
//                             title:"Users are required to use non-privileged accounts or roles when accessing nonsecurity functions.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Users are required to use non-privileged accounts or roles when accessing nonsecurity functions.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 },
//                 {
//                     cid:"3.018",
//                     type:"control",
//                     title:"Prevent non-privileged users from executing privileged functions and capture the execution of such functions in audit logs. ",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"3.018.a",
//                             type:"control",
//                             title:"Privileged functions are defined.  ",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Privileged functions are defined.  ",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"3.018.b",
//                             type:"control",
//                             title:"Non-privileged users are defined.  ",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Non-privileged users are defined.  ",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"3.018.c",
//                             type:"control",
//                             title:"Non-privileged users are prevented from executing privileged functions. ",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Non-privileged users are prevented from executing privileged functions. ",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"3.018.d",
//                             type:"control",
//                             title:"The execution of privileged functions is captured in audit logs.  ",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"The execution of privileged functions is captured in audit logs.  ",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 },
//                 {
//                     cid:"2.009",
//                     type:"control",
//                     title:"Limit unsuccessful logon attempts. ",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"2.009.a",
//                             type:"control",
//                             title:"The means of limiting unsuccessful logon attempts is defined. ",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"The means of limiting unsuccessful logon attempts is defined. ",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.009.b",
//                             type:"control",
//                             title:"The defined means of limiting unsuccessful logon attempts is implemented. ",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"The defined means of limiting unsuccessful logon attempts is implemented. ",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 },
//                 {
//                     cid:"2.005",
//                     type:"control",
//                     title:"Provide privacy and security notices consistent with applicable CUI rules. ",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"2.005.a",
//                             type:"control",
//                             title:"Privacy and security notices required by CUI-specified rules are identified, consistent, and associated with the specific CUI category. ",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Privacy and security notices required by CUI-specified rules are identified, consistent, and associated with the specific CUI category. ",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.005.b",
//                             type:"control",
//                             title:"Privacy and security notices are displayed.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Privacy and security notices are displayed.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 },
//                 {
//                     cid:"2.010",
//                     type:"control",
//                     title:"Use session lock with pattern-hiding displays to prevent access and viewing of data after a period of inactivity.",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"2.010.a",
//                             type:"control",
//                             title:"The period of inactivity after which the system initiates a session lock is defined.  ",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"The period of inactivity after which the system initiates a session lock is defined.  ",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.010.b",
//                             type:"control",
//                             title:"Access to the system and viewing of data is prevented by initiating a session lock after the defined period of inactivity. ",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Access to the system and viewing of data is prevented by initiating a session lock after the defined period of inactivity. ",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.010.c",
//                             type:"control",
//                             title:"Previously visible information is concealed via a pattern-hiding display after the defined period of inactivity.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Previously visible information is concealed via a pattern-hiding display after the defined period of inactivity.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 },
//                 {
//                     cid:"3.019",
//                     type:"control",
//                     title:"Terminate (automatically) a user session after a defined condition.",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"3.019.a",
//                             type:"control",
//                             title:"Conditions requiring a user session to terminate are defined. ",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Conditions requiring a user session to terminate are defined. ",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"3.019.b",
//                             type:"control",
//                             title:"A user session is automatically terminated after any of the defined conditions occur.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"A user session is automatically terminated after any of the defined conditions occur.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 },
//                 {
//                     cid:"2.013",
//                     type:"control",
//                     title:"Monitor and control remote access sessions. ",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"2.013.a",
//                             type:"control",
//                             title:"Remote access sessions are permitted.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Remote access sessions are permitted.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.013.b",
//                             type:"control",
//                             title:"The types of permitted remote access are identified.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"The types of permitted remote access are identified.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.013.c",
//                             type:"control",
//                             title:"Remote access sessions are controlled.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Remote access sessions are controlled.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.013.d",
//                             type:"control",
//                             title:"Remote access sessions are monitored. ",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Remote access sessions are monitored. ",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 },
//                 {
//                     cid:"3.014",
//                     type:"control",
//                     title:"Employ cryptographic mechanisms to protect the confidentiality of remote access sessions. 	",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"3.014.a",
//                             type:"control",
//                             title:"Cryptographic mechanisms to protect the confidentiality of remote access sessions are identified.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Cryptographic mechanisms to protect the confidentiality of remote access sessions are identified.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"3.014.b",
//                             type:"control",
//                             title:"Cryptographic mechanisms to protect the confidentiality of remote access sessions are implemented.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Cryptographic mechanisms to protect the confidentiality of remote access sessions are implemented.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 },
//                 {
//                     cid:"2.015",
//                     type:"control",
//                     title:"Route remote access via managed access control points.",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"2.015.a",
//                             type:"control",
//                             title:"Managed access control points are identified and implemented.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Managed access control points are identified and implemented.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.015.b",
//                             type:"control",
//                             title:"Remote access is routed through managed network access control points.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Remote access is routed through managed network access control points.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 },
//                 {
//                     cid:"3.021",
//                     type:"control",
//                     title:"Authorize remote execution of privileged commands and remote access to securityrelevant information. ",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"3.021.a",
//                             type:"control",
//                             title:"Privileged commands authorized for remote execution are identified. ",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Privileged commands authorized for remote execution are identified. ",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"3.021.b",
//                             type:"control",
//                             title:"Security-relevant information authorized to be accessed remotely is identified.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Security-relevant information authorized to be accessed remotely is identified.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"3.021.c",
//                             type:"control",
//                             title:"The execution of the identified privileged commands via remote access is authorized. ",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"The execution of the identified privileged commands via remote access is authorized. ",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"3.021.d",
//                             type:"control",
//                             title:"Access to the identified security-relevant information via remote access is authorized. ",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Access to the identified security-relevant information via remote access is authorized. ",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 },
//                 {
//                     cid:"2.011",
//                     type:"control",
//                     title:"Authorize wireless access prior to allowing such connections.",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"2.011.a",
//                             type:"control",
//                             title:"Wireless access points are identified. ",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Wireless access points are identified. ",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.011.b",
//                             type:"control",
//                             title:"Wireless access is authorized prior to allowing such connections.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Wireless access is authorized prior to allowing such connections.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 },
//                 {
//                     cid:"3.012",
//                     type:"control",
//                     title:"Protect wireless access using authentication and encryption.",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"3.012.a",
//                             type:"control",
//                             title:"Wireless access to the system is protected using authentication.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Wireless access to the system is protected using authentication.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"3.012.b",
//                             type:"control",
//                             title:"Wireless access to the system is protected using encryption.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Wireless access to the system is protected using encryption.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 },
//                 {
//                     cid:"3.020",
//                     type:"control",
//                     title:"Control connection of mobile devices. ",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"3.020.a",
//                             type:"control",
//                             title:"Mobile devices that process, store, or transmit CUI are identified.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Mobile devices that process, store, or transmit CUI are identified.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"3.020.b",
//                             type:"control",
//                             title:"Mobile device connections are authorized. ",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Mobile device connections are authorized. ",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"3.020.c",
//                             type:"control",
//                             title:"Mobile device connections are monitored and logged. ",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Mobile device connections are monitored and logged. ",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 },
//                 {
//                     cid:"3.022",
//                     type:"control",
//                     title:"Encrypt CUI on mobile devices and mobile computing platforms.",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"3.022.a",
//                             type:"control",
//                             title:"Mobile devices and mobile computing platforms that process, store, or transmit CUI are identified. ",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Mobile devices and mobile computing platforms that process, store, or transmit CUI are identified. ",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"3.022.b",
//                             type:"control",
//                             title:"Encryption is employed to protect CUI on identified mobile devices and mobile computing platforms. ",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Encryption is employed to protect CUI on identified mobile devices and mobile computing platforms.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 },
//                 {
//                     cid:"1.003",
//                     type:"control",
//                     title:"Verify and control/limit connections to and use of external systems.",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"1.003.a",
//                             type:"control",
//                             title:"Connections to external systems are identified. ",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Connections to external systems are identified. ",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"1.003.b",
//                             type:"control",
//                             title:"The use of external systems is identified. ",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"The use of external systems is identified. ",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"1.003.c",
//                             type:"control",
//                             title:"Connections to external systems are verified. ",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Connections to external systems are verified. ",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"1.003.d",
//                             type:"control",
//                             title:"The use of external systems is verified. ",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"The use of external systems is verified. ",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"1.003.e",
//                             type:"control",
//                             title:"Connections to external systems are controlled/limited. ",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Connections to external systems are controlled/limited.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"1.003.f",
//                             type:"control",
//                             title:"The use of external systems is controlled/limited.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"The use of external systems is controlled/limited.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 },
//                 {
//                     cid:"2.006",
//                     type:"control",
//                     title:"Limit use of portable storage devices on external systems. ",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"2.006.a",
//                             type:"control",
//                             title:"The use of portable storage devices containing CUI on external systems is identified and documented. ",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"The use of portable storage devices containing CUI on external systems is identified and documented. ",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.006.b",
//                             type:"control",
//                             title:"Limits on the use of portable storage devices containing CUI on external systems are defined.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Limits on the use of portable storage devices containing CUI on external systems are defined.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.006.b",
//                             type:"control",
//                             title:"The use of portable storage devices containing CUI on external systems is limited as defined. ",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"The use of portable storage devices containing CUI on external systems is limited as defined. ",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 },
//                 {
//                     cid:"1.004",
//                     type:"control",
//                     title:"Control CUI posted or processed on publicly accessible systems. ",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"1.004.a",
//                             type:"control",
//                             title:"Individuals authorized to post or process information on publicly accessible systems are identified. ",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Individuals authorized to post or process information on publicly accessible systems are identified. ",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"1.004.b",
//                             type:"control",
//                             title:"Procedures to ensure CUI is not posted or processed on publicly accessible systems are identified.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Procedures to ensure CUI is not posted or processed on publicly accessible systems are identified.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"1.004.c",
//                             type:"control",
//                             title:"A review process is in place prior to posting of any content to publicly accessible systems.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"A review process is in place prior to posting of any content to publicly accessible systems.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"1.004.d",
//                             type:"control",
//                             title:"Content on publicly accessible systems is reviewed to ensure that it does not include CUI.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Content on publicly accessible systems is reviewed to ensure that it does not include CUI.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"1.004.e",
//                             type:"control",
//                             title:"Mechanisms are in place to remove and address improper posting of CUI.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Mechanisms are in place to remove and address improper posting of CUI.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 }
//             ]

//         },
//         {
//             cid:"2",
//             type: "domain",
//             title: "AWARENESS AND TRAINING",
//             isLeaf_control:false,
//             child_controls:[
//                 {
//                     cid:"2.056",
//                     type:"control",
//                     title:"Ensure that managers, systems administrators, and users of organizational systems are made aware of the security risks associated with their activities and of the applicable policies, standards, and procedures related to the security of those systems. ",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"2.056.a",
//                             type:"control",
//                             title:"Security risks associated with organizational activities involving CUI are identified. ",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Security risks associated with organizational activities involving CUI are identified. ",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.056.b",
//                             type:"control",
//                             title:"Policies, standards, and procedures related to the security of the system are identified. ",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Policies, standards, and procedures related to the security of the system are identified. ",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.056.c",
//                             type:"control",
//                             title:"Managers, systems administrators, and users of the system are made aware of the security risks associated with their activities. ",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Managers, systems administrators, and users of the system are made aware of the security risks associated with their activities. ",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.056.d",
//                             type:"control",
//                             title:"Managers, systems administrators, and users of the system are made aware of the applicable policies, standards, and procedures related to the security of the system. ",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Managers, systems administrators, and users of the system are made aware of the applicable policies, standards, and procedures related to the security of the system. ",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 },
//                 {
//                     cid:"2.057",
//                     type:"control",
//                     title:"Ensure that personnel are trained to carry out their assigned information security-related duties and responsibilities.",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"2.057.a",
//                             type:"control",
//                             title:"Information security-related duties, roles, and responsibilities are defined. ",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Information security-related duties, roles, and responsibilities are defined. ",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.057.b",
//                             type:"control",
//                             title:"Information security-related duties, roles, and responsibilities are assigned to designated personnel.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Information security-related duties, roles, and responsibilities are assigned to designated personnel.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.057.c",
//                             type:"control",
//                             title:"Personnel are adequately trained to carry out their assigned information security-related duties, roles, and responsibilities. ",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Personnel are adequately trained to carry out their assigned information security-related duties, roles, and responsibilities. ",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 },
//                 {
//                     cid:"3.058",
//                     type:"control",
//                     title:"Provide security awareness training on recognizing and reporting potential indicators of insider threat.",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"3.058.a",
//                             type:"control",
//                             title:"Potential indicators associated with insider threats are identified.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Potential indicators associated with insider threats are identified.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"3.058.b",
//                             type:"control",
//                             title:"Security awareness training on recognizing and reporting potential indicators of insider threat is provided to managers and employees.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Security awareness training on recognizing and reporting potential indicators of insider threat is provided to managers and employees.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 }

//             ]
//         },
//         {
//             cid:"3",
//             type: "domain",
//             title: "AUDIT AND ACCOUNTABILITY",
//             isLeaf_control:false,
//             child_controls:[
//                 {
//                     cid:"2.042",
//                     type:"control",
//                     title:"Create and retain system audit logs and records to the extent needed to enable the monitoring, analysis, investigation, and reporting of unlawful or unauthorized system activity.",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"2.042.a",
//                             type:"control",
//                             title:"Audit logs needed (i.e., event types to be logged) to enable the monitoring, analysis, investigation, and reporting of unlawful or unauthorized system activity are specified.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Audit logs needed (i.e., event types to be logged) to enable the monitoring, analysis, investigation, and reporting of unlawful or unauthorized system activity are specified.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.042.b",
//                             type:"control",
//                             title:"The content of audit records needed to support monitoring, analysis, investigation, and reporting of unlawful or unauthorized system activity is defined.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"The content of audit records needed to support monitoring, analysis, investigation, and reporting of unlawful or unauthorized system activity is defined.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.042.c",
//                             type:"control",
//                             title:"Audit records are created (generated).",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Audit records are created (generated).",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.042.d",
//                             type:"control",
//                             title:"Audit records, once created, contain the defined content.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Audit records, once created, contain the defined content.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.042.e",
//                             type:"control",
//                             title:"Retention requirements for audit records are defined.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Retention requirements for audit records are defined.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.042.f",
//                             type:"control",
//                             title:"Audit records are retained as defined.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Audit records are retained as defined.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 },
//                 {
//                     cid:"2.041",
//                     type:"control",
//                     title:"Ensure that the actions of individual system users can be uniquely traced to those users so they can be held accountable for their actions. ",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"2.041.a",
//                             type:"control",
//                             title:"The content of the audit records needed to support the ability to uniquely trace users to their actions is defined.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"The content of the audit records needed to support the ability to uniquely trace users to their actions is defined.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.041.b",
//                             type:"control",
//                             title:"Audit records, once created, contain the defined content.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Audit records, once created, contain the defined content.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 },
//                 {
//                     cid:"3.045",
//                     type:"control",
//                     title:"Review and update logged events. ",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"3.045.a",
//                             type:"control",
//                             title:"A process for determining when to review logged events is defined.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"A process for determining when to review logged events is defined.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"3.045.b",
//                             type:"control",
//                             title:"Event types being logged are reviewed in accordance with the defined review process.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Event types being logged are reviewed in accordance with the defined review process.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"3.045.c",
//                             type:"control",
//                             title:"Event types being logged are updated based on the review.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Event types being logged are updated based on the review.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 },
//                 {
//                     cid:"3.046",
//                     type:"control",
//                     title:"Alert in the event of an audit logging process failure. 	",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"3.046.a",
//                             type:"control",
//                             title:"Personnel or roles to be alerted in the event of an audit logging process failure are identified.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Personnel or roles to be alerted in the event of an audit logging process failure are identified.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"3.046.b",
//                             type:"control",
//                             title:"Types of audit logging process failures for which alert will be generated are defined.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Types of audit logging process failures for which alert will be generated are defined.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"3.046.c",
//                             type:"control",
//                             title:"Identified personnel or roles are alerted in the event of an audit logging process failure.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Identified personnel or roles are alerted in the event of an audit logging process failure.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 },
//                 {
//                     cid:"3.051",
//                     type:"control",
//                     title:"Correlate audit record review, analysis, and reporting processes for investigation and response to indications of unlawful, unauthorized, suspicious, or unusual activity.",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"3.051.a",
//                             type:"control",
//                             title:"Audit record review, analysis, and reporting processes for investigation and response to indications of unlawful, unauthorized, suspicious, or unusual activity are defined.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Audit record review, analysis, and reporting processes for investigation and response to indications of unlawful, unauthorized, suspicious, or unusual activity are defined.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"3.051.b",
//                             type:"control",
//                             title:"Defined audit record review, analysis, and reporting processes are correlated. ",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Defined audit record review, analysis, and reporting processes are correlated. ",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 },
//                 {
//                     cid:"3.052",
//                     type:"control",
//                     title:"Provide audit record reduction and report generation to support on-demand analysis and reporting. 	",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"3.052.a",
//                             type:"control",
//                             title:"An audit record reduction capability that supports on-demand analysis is provided.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"An audit record reduction capability that supports on-demand analysis is provided.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"3.052.b",
//                             type:"control",
//                             title:"A report generation capability that supports on-demand reporting is provided.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"A report generation capability that supports on-demand reporting is provided.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 },
//                 {
//                     cid:"2.043",
//                     type:"control",
//                     title:"Provide a system capability that compares and synchronizes internal system clocks with an authoritative source to generate time stamps for audit records.",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"2.043.a",
//                             type:"control",
//                             title:"Internal system clocks are used to generate time stamps for audit records.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Internal system clocks are used to generate time stamps for audit records.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.043.b",
//                             type:"control",
//                             title:"An authoritative source with which to compare and synchronize internal system clocks is specified. ",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"An authoritative source with which to compare and synchronize internal system clocks is specified. ",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.043.c",
//                             type:"control",
//                             title:"Internal system clocks used to generate time stamps for audit records are compared to and synchronized with the specified authoritative time source.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Internal system clocks used to generate time stamps for audit records are compared to and synchronized with the specified authoritative time source.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 },
//                 {
//                     cid:"3.049",
//                     type:"control",
//                     title:"Protect audit information and audit logging tools from unauthorized access, modification, and deletion. ",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"3.049.a",
//                             type:"control",
//                             title:"Audit information is protected from unauthorized access.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Audit information is protected from unauthorized access.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"3.049.b",
//                             type:"control",
//                             title:"Audit information is protected from unauthorized modification. ",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Audit information is protected from unauthorized modification. ",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"3.049.c",
//                             type:"control",
//                             title:"Audit information is protected from unauthorized deletion.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Audit information is protected from unauthorized deletion.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"3.049.d",
//                             type:"control",
//                             title:"Audit logging tools are protected from unauthorized access.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Audit logging tools are protected from unauthorized access.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"3.049.e",
//                             type:"control",
//                             title:"Audit logging tools are protected from unauthorized modification.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Audit logging tools are protected from unauthorized modification.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"3.049.f",
//                             type:"control",
//                             title:"Audit logging tools are protected from unauthorized deletion.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Audit logging tools are protected from unauthorized deletion.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 },
//                 {
//                     cid:"3.050",
//                     type:"control",
//                     title:"Limit management of audit logging functionality to a subset of privileged users.",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"3.050.a",
//                             type:"control",
//                             title:"A subset of privileged users granted access to manage audit logging functionality is defined.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"A subset of privileged users granted access to manage audit logging functionality is defined.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"3.050.b",
//                             type:"control",
//                             title:"Management of audit logging functionality is limited to the defined subset of privileged users.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Management of audit logging functionality is limited to the defined subset of privileged users.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 }
//             ]
//         },
//         {
//             cid:"4",
//             type: "domain",
//             title: "CONFIGURATION MANAGEMENT",
//             isLeaf_control:false,
//             child_controls:[
//                 {
//                     cid:"2.061",
//                     type:"control",
//                     title:"Establish and maintain baseline configurations and inventories of organizational systems (including hardware, software, firmware, and documentation) throughout the respective system development life cycles.",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"2.061.a",
//                             type:"control",
//                             title:"A baseline configuration is established.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"A baseline configuration is established.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.061.b",
//                             type:"control",
//                             title:"The baseline configuration includes hardware, software, firmware, and documentation.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"The baseline configuration includes hardware, software, firmware, and documentation.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.061.c",
//                             type:"control",
//                             title:"The baseline configuration is maintained (reviewed and updated) throughout the system development life cycle.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"The baseline configuration is maintained (reviewed and updated) throughout the system development life cycle.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.061.d",
//                             type:"control",
//                             title:"A system inventory is established.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"A system inventory is established.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.061.e",
//                             type:"control",
//                             title:"The system inventory includes hardware, software, firmware, and documentation.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"The system inventory includes hardware, software, firmware, and documentation.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.061.f",
//                             type:"control",
//                             title:"The inventory is maintained (reviewed and updated) throughout the system development life cycle.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"The inventory is maintained (reviewed and updated) throughout the system development life cycle.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 },
//                 {
//                     cid:"2.064",
//                     type:"control",
//                     title:"Establish and enforce security configuration settings for information technology products employed in organizational systems.",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"2.064.a",
//                             type:"control",
//                             title:"Security configuration settings for information technology products employed in the system are established and included in the baseline configuration.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Security configuration settings for information technology products employed in the system are established and included in the baseline configuration.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.064.b",
//                             type:"control",
//                             title:"Security configuration settings for information technology products employed in the system are enforced.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Security configuration settings for information technology products employed in the system are enforced.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 },
//                 {
//                     cid:"2.065",
//                     type:"control",
//                     title:"Track, review, approve or disapprove, and log changes to organizational systems. ",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"2.065.a",
//                             type:"control",
//                             title:"Changes to the system are tracked.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Changes to the system are tracked.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.065.b",
//                             type:"control",
//                             title:"Changes to the system are reviewed.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Changes to the system are reviewed.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.065.c",
//                             type:"control",
//                             title:"Changes to the system are approved or disapproved.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Changes to the system are approved or disapproved.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.065.d",
//                             type:"control",
//                             title:"Changes to the system are logged.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Changes to the system are logged.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 },
//                 {
//                     cid:"2.066",
//                     type:"control",
//                     title:"Analyze the security impact of changes prior to implementation.",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"2.066.a",
//                             type:"control",
//                             title:"Determine if the security impact of changes to the system is analyzed prior to implementation.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Determine if the security impact of changes to the system is analyzed prior to implementation.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 },
//                 {
//                     cid:"3.067",
//                     type:"control",
//                     title:"Define, document, approve, and enforce physical and logical access restrictions associated with changes to organizational systems.",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"3.067.a",
//                             type:"control",
//                             title:"Physical access restrictions associated with changes to the system are defined. ",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Physical access restrictions associated with changes to the system are defined. ",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"3.067.b",
//                             type:"control",
//                             title:"Physical access restrictions associated with changes to the system are documented.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Physical access restrictions associated with changes to the system are documented.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"3.067.c",
//                             type:"control",
//                             title:"Physical access restrictions associated with changes to the system are approved.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Physical access restrictions associated with changes to the system are approved.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"3.067.d",
//                             type:"control",
//                             title:"Physical access restrictions associated with changes to the system are enforced.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Physical access restrictions associated with changes to the system are enforced.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"3.067.e",
//                             type:"control",
//                             title:"Logical access restrictions associated with changes to the system are defined.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Logical access restrictions associated with changes to the system are defined.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"3.067.f",
//                             type:"control",
//                             title:"Logical access restrictions associated with changes to the system are documented.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Logical access restrictions associated with changes to the system are documented.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"3.067.g",
//                             type:"control",
//                             title:"Logical access restrictions associated with changes to the system are approved.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Logical access restrictions associated with changes to the system are approved.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"3.067.h",
//                             type:"control",
//                             title:"Logical access restrictions associated with changes to the system are enforced.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Logical access restrictions associated with changes to the system are enforced.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 },
//                 {
//                     cid:"2.062",
//                     type:"control",
//                     title:"Employ the principle of least functionality by configuring organizational systems to provide only essential capabilities.",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"2.062.a",
//                             type:"control",
//                             title:"Essential system capabilities are defined based on the principle of least functionality.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Essential system capabilities are defined based on the principle of least functionality.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.062.b",
//                             type:"control",
//                             title:"The system is configured to provide only the defined essential capabilities.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"The system is configured to provide only the defined essential capabilities.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 },
//                 {
//                     cid:"3.068",
//                     type:"control",
//                     title:"Restrict, disable, or prevent the use of nonessential programs, functions, ports, protocols, and services.",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"3.068.a",
//                             type:"control",
//                             title:"Essential programs are defined. ",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Essential programs are defined. ",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"3.068.b",
//                             type:"control",
//                             title:"The use of nonessential programs is defined.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"The use of nonessential programs is defined.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"3.068.c",
//                             type:"control",
//                             title:"The use of nonessential programs is restricted, disabled, or prevented as defined.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"The use of nonessential programs is restricted, disabled, or prevented as defined.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"3.068.d",
//                             type:"control",
//                             title:"Essential functions are defined.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Essential functions are defined.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"3.068.e",
//                             type:"control",
//                             title:"The use of nonessential functions is defined.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"The use of nonessential functions is defined.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"3.068.f",
//                             type:"control",
//                             title:"The use of nonessential functions is restricted, disabled, or prevented as defined.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"The use of nonessential functions is restricted, disabled, or prevented as defined.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"3.068.g",
//                             type:"control",
//                             title:"Essential ports are defined.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Essential ports are defined.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"3.068.h",
//                             type:"control",
//                             title:"The use of nonessential ports is defined.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"The use of nonessential ports is defined.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"3.068.i",
//                             type:"control",
//                             title:"The use of nonessential ports is restricted, disabled, or prevented as defined.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"The use of nonessential ports is restricted, disabled, or prevented as defined.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"3.068.j",
//                             type:"control",
//                             title:"Essential protocols are defined.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Essential protocols are defined.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"3.068.k",
//                             type:"control",
//                             title:"The use of nonessential protocols is defined.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"The use of nonessential protocols is defined.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"3.068.l",
//                             type:"control",
//                             title:"The use of nonessential protocols is restricted, disabled, or prevented as defined.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"The use of nonessential protocols is restricted, disabled, or prevented as defined.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"3.068.m",
//                             type:"control",
//                             title:"Essential services are defined.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Essential services are defined.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"3.068.n",
//                             type:"control",
//                             title:"The use of nonessential services is defined.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"The use of nonessential services is defined.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"3.068.o",
//                             type:"control",
//                             title:"The use of nonessential services is restricted, disabled, or prevented as defined.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"The use of nonessential services is restricted, disabled, or prevented as defined.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 },
//                 {
//                     cid:"3.069",
//                     type:"control",
//                     title:"Apply deny-by-exception (blacklisting) policy to prevent the use of unauthorized software or deny-all, permit-by-exception (whitelisting) policy to allow the execution of authorized software.",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"3.069.a",
//                             type:"control",
//                             title:"A policy specifying whether whitelisting or blacklisting is to be implemented is specified.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"A policy specifying whether whitelisting or blacklisting is to be implemented is specified.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"3.069.b",
//                             type:"control",
//                             title:"The software allowed to execute under whitelisting or denied use under blacklisting is specified.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"The software allowed to execute under whitelisting or denied use under blacklisting is specified.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"3.069.c",
//                             type:"control",
//                             title:"Whitelisting to allow the execution of authorized software or blacklisting to prevent the use of unauthorized software is implemented as specified.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Whitelisting to allow the execution of authorized software or blacklisting to prevent the use of unauthorized software is implemented as specified.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 },
//                 {
//                     cid:"2.063",
//                     type:"control",
//                     title:"Control and monitor user-installed software.",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"2.063.a",
//                             type:"control",
//                             title:"A policy for controlling the installation of software by users is established.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"A policy for controlling the installation of software by users is established.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.063.b",
//                             type:"control",
//                             title:"Installation of software by users is controlled based on the established policy.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Installation of software by users is controlled based on the established policy.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.063.c",
//                             type:"control",
//                             title:"Installation of software by users is monitored.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Installation of software by users is monitored.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 },
//             ]
//         },
//         {
//             cid:"5",
//             type: "domain",
//             title: "IDENTIFICATION AND AUTHENTICATION",
//             isLeaf_control:false,
//             child_controls:[
//                 {
//                     cid:"1.076",
//                     type:"control",
//                     title:"Identify system users, processes acting on behalf of users, and devices. 	",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"1.076.a",
//                             type:"control",
//                             title:"System users are identified.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"System users are identified.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"1.076.b",
//                             type:"control",
//                             title:"Processes acting on behalf of users are identified.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Processes acting on behalf of users are identified.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"1.076.c",
//                             type:"control",
//                             title:"Devices accessing the system are identified.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Devices accessing the system are identified.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 },
//                 {
//                     cid:"1.077",
//                     type:"control",
//                     title:"Authenticate (or verify) the identities of users, processes, or devices, as a prerequisite to allowing access to organizational systems. 	",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"1.077.a",
//                             type:"control",
//                             title:"The identity of each user is authenticated or verified as a prerequisite to system access.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"The identity of each user is authenticated or verified as a prerequisite to system access.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"1.077.b",
//                             type:"control",
//                             title:"The identity of each process acting on behalf of a user is authenticated or verified as a prerequisite to system access.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"The identity of each process acting on behalf of a user is authenticated or verified as a prerequisite to system access.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"1.077.c",
//                             type:"control",
//                             title:"The identity of each device accessing or connecting to the system is authenticated or verified as a prerequisite to system access.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"The identity of each device accessing or connecting to the system is authenticated or verified as a prerequisite to system access.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 },
//                 {
//                     cid:"3.083",
//                     type:"control",
//                     title:"Use multifactor authentication for local and network access to privileged accounts and for network access to non-privileged accounts.",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"3.083.a",
//                             type:"control",
//                             title:"Privileged accounts are identified.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Privileged accounts are identified.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"3.083.b",
//                             type:"control",
//                             title:"Multifactor authentication is implemented for local access to privileged accounts.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Multifactor authentication is implemented for local access to privileged accounts.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"3.083.c",
//                             type:"control",
//                             title:"Multifactor authentication is implemented for network access to privileged accounts.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Multifactor authentication is implemented for network access to privileged accounts.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"3.083.d",
//                             type:"control",
//                             title:"Multifactor authentication is implemented for network access to non-privileged accounts.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Multifactor authentication is implemented for network access to non-privileged accounts.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 },
//                 {
//                     cid:"3.084",
//                     type:"control",
//                     title:"Employ replay-resistant authentication mechanisms for network access to privileged and non-privileged accounts.",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"3.084.a",
//                             type:"control",
//                             title:"Determine if replay-resistant authentication mechanisms are implemented for network account access to privileged and non-privileged accounts.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Determine if replay-resistant authentication mechanisms are implemented for network account access to privileged and non-privileged accounts.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },

//                     ]
//                 },
//                 {
//                     cid:"3.085",
//                     type:"control",
//                     title:"Prevent reuse of identifiers for a defined period.",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"3.085.a",
//                             type:"control",
//                             title:"A period within which identifiers cannot be reused is defined.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"A period within which identifiers cannot be reused is defined.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"3.085.b",
//                             type:"control",
//                             title:"Reuse of identifiers is prevented within the defined period.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Reuse of identifiers is prevented within the defined period.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 },
//                 {
//                     cid:"3.086",
//                     type:"control",
//                     title:"Disable identifiers after a defined period of inactivity. 	",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"3.086.a",
//                             type:"control",
//                             title:"A period of inactivity after which an identifier is disabled is defined.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"A period of inactivity after which an identifier is disabled is defined.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"3.086.b",
//                             type:"control",
//                             title:"Identifiers are disabled after the defined period of inactivity.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Identifiers are disabled after the defined period of inactivity.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 },
//                 {
//                     cid:"2.078",
//                     type:"control",
//                     title:"Enforce a minimum password complexity and change of characters when new passwords are created.",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"2.078.a",
//                             type:"control",
//                             title:"Password complexity requirements are defined.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Password complexity requirements are defined.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.078.b",
//                             type:"control",
//                             title:"Password change of character requirements are defined.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Password change of character requirements are defined.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.078.c",
//                             type:"control",
//                             title:"Minimum password complexity requirements as defined are enforced when new passwords are created.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Minimum password complexity requirements as defined are enforced when new passwords are created.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.078.d",
//                             type:"control",
//                             title:"Minimum password change of character requirements as defined are enforced when new passwords are created.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Minimum password change of character requirements as defined are enforced when new passwords are created.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 },
//                 {
//                     cid:"2.079",
//                     type:"control",
//                     title:"Prohibit password reuse for a specified number of generations. 	",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"2.079.a",
//                             type:"control",
//                             title:"The number of generations during which a password cannot be reused is specified. ",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"The number of generations during which a password cannot be reused is specified. ",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.079.b",
//                             type:"control",
//                             title:"Reuse of passwords is prohibited during the specified number of generations.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Reuse of passwords is prohibited during the specified number of generations.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 },
//                 {
//                     cid:"2.080",
//                     type:"control",
//                     title:"Allow temporary password use for system logons with an immediate change to a permanent password.",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"2.080.a",
//                             type:"control",
//                             title:"Determine if an immediate change to a permanent password is required when a temporary password is used for system logon.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Determine if an immediate change to a permanent password is required when a temporary password is used for system logon.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 },
//                 {
//                     cid:"2.081",
//                     type:"control",
//                     title:"Store and transmit only cryptographically-protected passwords.",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"2.081.a",
//                             type:"control",
//                             title:"Passwords are cryptographically protected in storage.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Passwords are cryptographically protected in storage.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.081.b",
//                             type:"control",
//                             title:"Passwords are cryptographically protected in transit.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Passwords are cryptographically protected in transit.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 },
//                 {
//                     cid:"2.081",
//                     type:"control",
//                     title:"Obscure feedback of authentication information. ",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"2.081.a",
//                             type:"control",
//                             title:"Determine if authentication information is obscured during the authentication process.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Determine if authentication information is obscured during the authentication process.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 },
//             ]
//         },
//         {
//             cid:"6",
//             type: "domain",
//             title: "INCIDENT RESPONSE",
//             isLeaf_control:false,
//             child_controls:[
//                 {
//                     cid:"2.092",
//                     type:"control",
//                     title:"Establish an operational incident-handling capability for organizational systems that includes preparation, detection, analysis, containment, recovery, and user response activities.",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"2.092.a",
//                             type:"control",
//                             title:"An operational incident-handling capability is established.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"An operational incident-handling capability is established.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.092.b",
//                             type:"control",
//                             title:"The operational incident-handling capability includes preparation.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"The operational incident-handling capability includes preparation.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.092.c",
//                             type:"control",
//                             title:"The operational incident-handling capability includes detection.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"The operational incident-handling capability includes detection.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.092.d",
//                             type:"control",
//                             title:"The operational incident-handling capability includes analysis.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"The operational incident-handling capability includes analysis.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.092.e",
//                             type:"control",
//                             title:"The operational incident-handling capability includes containment.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"The operational incident-handling capability includes containment.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.092.f",
//                             type:"control",
//                             title:"The operational incident-handling capability includes recovery.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"The operational incident-handling capability includes recovery.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.092.g",
//                             type:"control",
//                             title:"The operational incident-handling capability includes user response activities.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"The operational incident-handling capability includes user response activities.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 },
//                 {
//                     cid:"3.098",
//                     type:"control",
//                     title:"Track, document, and report incidents to designated officials and/or authorities both internal and external to the organization.",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"3.098.a",
//                             type:"control",
//                             title:"Incidents are tracked.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Incidents are tracked.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"3.098.b",
//                             type:"control",
//                             title:"Incidents are documented.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Incidents are documented.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"3.098.c",
//                             type:"control",
//                             title:"Authorities to whom incidents are to be reported are identified.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Authorities to whom incidents are to be reported are identified.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"3.098.d",
//                             type:"control",
//                             title:"Organizational officials to whom incidents are to be reported are identified.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Organizational officials to whom incidents are to be reported are identified.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"3.098.e",
//                             type:"control",
//                             title:"Identified authorities are notified of incidents.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Identified authorities are notified of incidents.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"3.098.f",
//                             type:"control",
//                             title:"Identified organizational officials are notified of incidents.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Identified organizational officials are notified of incidents.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 },
//                 {
//                     cid:"3.099",
//                     type:"control",
//                     title:"Test the organizational incident response capability.",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"3.099.a",
//                             type:"control",
//                             title:"Determine if the incident response capability is tested.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Determine if the incident response capability is tested.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                     ]
//                 },
//             ]
//         },
//         {
//             cid:"7",
//             type: "domain",
//             title: "MAINTENANCE",
//             isLeaf_control:false,
//             child_controls:[
//                 {
//                     cid:"2.111",
//                     type:"control",
//                     title:"Perform maintenance on organizational systems.",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"2.111.a",
//                             type:"control",
//                             title:"Determine if system maintenance is performed.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Determine if system maintenance is performed.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                     ]
//                 },
//                 {
//                     cid:"2.112",
//                     type:"control",
//                     title:"Provide controls on the tools, techniques, mechanisms, and personnel used to conduct system maintenance.",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"2.112.a",
//                             type:"control",
//                             title:"Tools used to conduct system maintenance are controlled.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Tools used to conduct system maintenance are controlled.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.112.b",
//                             type:"control",
//                             title:"Techniques used to conduct system maintenance are controlled.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Techniques used to conduct system maintenance are controlled.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.112.c",
//                             type:"control",
//                             title:"Mechanisms used to conduct system maintenance are controlled.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Mechanisms used to conduct system maintenance are controlled.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.112.d",
//                             type:"control",
//                             title:"Personnel used to conduct system maintenance are controlled.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Personnel used to conduct system maintenance are controlled.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                     ]
//                 },
//                 {
//                     cid:"3.115",
//                     type:"control",
//                     title:"Ensure equipment removed for off-site maintenance is sanitized of any CUI.",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"3.115.a",
//                             type:"control",
//                             title:"Determine if equipment to be removed from organizational spaces for off-site maintenance is sanitized of any CUI.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Determine if equipment to be removed from organizational spaces for off-site maintenance is sanitized of any CUI.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                     ]
//                 },
//                 {
//                     cid:"3.116",
//                     type:"control",
//                     title:"Check media containing diagnostic and test programs for malicious code before the media are used in organizational systems.",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"3.116.a",
//                             type:"control",
//                             title:"Determine if media containing diagnostic and test programs are checked for malicious code before being used in organizational systems that process, store, or transmit CUI.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Determine if media containing diagnostic and test programs are checked for malicious code before being used in organizational systems that process, store, or transmit CUI.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                     ]
//                 },
//                 {
//                     cid:"2.113",
//                     type:"control",
//                     title:"Require multifactor authentication to establish nonlocal maintenance sessions via external network connections and terminate such connections when nonlocal maintenance is complete.",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"2.113.a",
//                             type:"control",
//                             title:"Multifactor authentication is used to establish nonlocal maintenance sessions via external network connections.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Multifactor authentication is used to establish nonlocal maintenance sessions via external network connections.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.113.b",
//                             type:"control",
//                             title:"Nonlocal maintenance sessions established via external network connections are terminated when nonlocal maintenance is complete.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Nonlocal maintenance sessions established via external network connections are terminated when nonlocal maintenance is complete.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                     ]
//                 },
//                 {
//                     cid:"2.114",
//                     type:"control",
//                     title:"Supervise the maintenance activities of maintenance personnel without required access authorization.",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"2.114.a",
//                             type:"control",
//                             title:"Determine if maintenance personnel without required access authorization are supervised during maintenance activities.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Determine if maintenance personnel without required access authorization are supervised during maintenance activities.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                     ]
//                 }
//             ]
//         },
//         {
//             cid:"8",
//             type: "domain",
//             title: "MEDIA PROTECTION",
//             isLeaf_control:false,
//             child_controls:[
//                 {
//                     cid:"2.119",
//                     type:"control",
//                     title:"Protect (i.e., physically control and securely store) system media containing CUI, both paper and digital.",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"2.119.a",
//                             type:"control",
//                             title:"Paper media containing CUI is physically controlled.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Paper media containing CUI is physically controlled.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.119.b",
//                             type:"control",
//                             title:"Digital media containing CUI is physically controlled.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Digital media containing CUI is physically controlled.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.119.c",
//                             type:"control",
//                             title:"Paper media containing CUI is securely stored.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Paper media containing CUI is securely stored.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.119.d",
//                             type:"control",
//                             title:"Digital media containing CUI is securely stored.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Digital media containing CUI is securely stored.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                     ]
//                 },
//                 {
//                     cid:"2.120",
//                     type:"control",
//                     title:"Limit access to CUI on system media to authorized users.",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"2.120.a",
//                             type:"control",
//                             title:"Determine if access to CUI on system media is limited to authorized users.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Determine if access to CUI on system media is limited to authorized users.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 },
//                 {
//                     cid:"1.118",
//                     type:"control",
//                     title:"Sanitize or destroy system media containing CUI before disposal or release for reuse.",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"1.118.a",
//                             type:"control",
//                             title:"System media containing CUI is sanitized or destroyed before disposal.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"System media containing CUI is sanitized or destroyed before disposal.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"1.118.b",
//                             type:"control",
//                             title:"System media containing CUI is sanitized before it is released for reuse.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"System media containing CUI is sanitized before it is released for reuse.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 },
//                 {
//                     cid:"3.122",
//                     type:"control",
//                     title:"Mark media with necessary CUI markings and distribution limitations.",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"3.122.a",
//                             type:"control",
//                             title:"Media containing CUI is marked with applicable CUI markings.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Media containing CUI is marked with applicable CUI markings.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"3.122.b",
//                             type:"control",
//                             title:"Media containing CUI is marked with distribution limitations.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Media containing CUI is marked with distribution limitations.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 },
//                 {
//                     cid:"3.124",
//                     type:"control",
//                     title:"Control access to media containing CUI and maintain accountability for media during transport outside of controlled areas.",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"3.124.a",
//                             type:"control",
//                             title:"Access to media containing CUI is controlled.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Access to media containing CUI is controlled.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"3.124.b",
//                             type:"control",
//                             title:"Accountability for media containing CUI is maintained during transport outside of controlled areas.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Accountability for media containing CUI is maintained during transport outside of controlled areas.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 },
//                 {
//                     cid:"3.125",
//                     type:"control",
//                     title:"Implement cryptographic mechanisms to protect the confidentiality of CUI stored on digital media during transport unless otherwise protected by alternative physical safeguards.",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"3.125.a",
//                             type:"control",
//                             title:"Determine if the confidentiality of CUI stored on digital media is protected during transport using cryptographic mechanisms or alternative physical safeguards.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Determine if the confidentiality of CUI stored on digital media is protected during transport using cryptographic mechanisms or alternative physical safeguards.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 },
//                 {
//                     cid:"2.121",
//                     type:"control",
//                     title:"Control the use of removable media on system components.",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"2.121.a",
//                             type:"control",
//                             title:"Determine if the use of removable media on system components is controlled.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Determine if the use of removable media on system components is controlled.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 },
//                 {
//                     cid:"3.123",
//                     type:"control",
//                     title:"Prohibit the use of portable storage devices when such devices have no identifiable owner.",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"3.123.a",
//                             type:"control",
//                             title:"Determine if the use of portable storage devices is prohibited when such devices have no identifiable owner.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Determine if the use of portable storage devices is prohibited when such devices have no identifiable owner.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 }
//             ]
//         },
//         {
//             cid:"9",
//             type: "domain",
//             title: "RECOVERY",
//             isLeaf_control:false,
//             child_controls:[
//                 {
//                     cid:"2.138",
//                     type:"control",
//                     title:"Protect the confidentiality of backup CUI at storage locations.",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"2.138.a",
//                             type:"control",
//                             title:"Determine if the confidentiality of backup CUI is protected at storage locations.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Determine if the confidentiality of backup CUI is protected at storage locations.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 }
//             ]
//         },
//         {
//             cid:"10",
//             type: "domain",
//             title: "PERSONNEL SECURITY",
//             isLeaf_control:false,
//             child_controls:[
//                 {
//                     cid:"2.127",
//                     type:"control",
//                     title:"Screen individuals prior to authorizing access to organizational systems containing CUI.",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"2.127.a",
//                             type:"control",
//                             title:"Determine if individuals are screened prior to authorizing access to organizational systems containing CUI.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Determine if individuals are screened prior to authorizing access to organizational systems containing CUI.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 },
//                 {
//                     cid:"2.128",
//                     type:"control",
//                     title:"Ensure that organizational systems containing CUI are protected during and after personnel actions such as terminations and transfers.",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"2.128.a",
//                             type:"control",
//                             title:"A policy and/or process for terminating system access and any credentials coincident with personnel actions is established.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"A policy and/or process for terminating system access and any credentials coincident with personnel actions is established.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.128.b",
//                             type:"control",
//                             title:"System access and credentials are terminated consistent with personnel actions such as termination or transfer.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"System access and credentials are terminated consistent with personnel actions such as termination or transfer. ",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.128.c",
//                             type:"control",
//                             title:"The system is protected during and after personnel transfer actions.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"The system is protected during and after personnel transfer actions.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 }
//             ]
//         },
//         {
//             cid:"11",
//             type: "domain",
//             title: "PHYSICAL PROTECTION",
//             isLeaf_control:false,
//             child_controls:[
//                 {
//                     cid:"1.131",
//                     type:"control",
//                     title:"Limit physical access to organizational systems, equipment, and the respective operating environments to authorized individuals.",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"1.131.a",
//                             type:"control",
//                             title:"Authorized individuals allowed physical access are identified.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Authorized individuals allowed physical access are identified.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"1.131.b",
//                             type:"control",
//                             title:"Physical access to organizational systems is limited to authorized individuals.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Physical access to organizational systems is limited to authorized individuals.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"1.131.c",
//                             type:"control",
//                             title:"Physical access to equipment is limited to authorized individuals.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Physical access to equipment is limited to authorized individuals.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"1.131.d",
//                             type:"control",
//                             title:"Physical access to operating environments is limited to authorized individuals.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Physical access to operating environments is limited to authorized individuals.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 },
//                 {
//                     cid:"2.135",
//                     type:"control",
//                     title:"Protect and monitor the physical facility and support infrastructure for organizational systems.",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"2.135.a",
//                             type:"control",
//                             title:"The physical facility where organizational systems reside is protected.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"The physical facility where organizational systems reside is protected.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.135.b",
//                             type:"control",
//                             title:"The support infrastructure for organizational systems is protected.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"The support infrastructure for organizational systems is protected.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.135.c",
//                             type:"control",
//                             title:"The physical facility where organizational systems reside is monitored.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"The physical facility where organizational systems reside is monitored.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.135.d",
//                             type:"control",
//                             title:"The support infrastructure for organizational systems is monitored.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"The support infrastructure for organizational systems is monitored.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 },
//                 {
//                     cid:"1.132",
//                     type:"control",
//                     title:"Escort visitors and monitor visitor activity.",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"1.132.a",
//                             type:"control",
//                             title:"Visitors are escorted.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Visitors are escorted.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"1.132.b",
//                             type:"control",
//                             title:"Visitor activity is monitored.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Visitor activity is monitored.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 },
//                 {
//                     cid:"1.133",
//                     type:"control",
//                     title:"Maintain audit logs of physical access.",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"1.133.a",
//                             type:"control",
//                             title:"Determine if audit logs of physical access are maintained.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Determine if audit logs of physical access are maintained.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 },
//                 {
//                     cid:"1.134",
//                     type:"control",
//                     title:"Control and manage physical access devices.",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"1.134.a",
//                             type:"control",
//                             title:"Physical access devices are identified.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Physical access devices are identified.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"1.134.b",
//                             type:"control",
//                             title:"Physical access devices are controlled.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Physical access devices are controlled.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"1.134.c",
//                             type:"control",
//                             title:"Physical access devices are managed.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Physical access devices are managed.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 },
//                 {
//                     cid:"3.136",
//                     type:"control",
//                     title:"Enforce safeguarding measures for CUI at alternate work sites.",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"3.136.a",
//                             type:"control",
//                             title:"Safeguarding measures for CUI are defined for alternate work sites.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Safeguarding measures for CUI are defined for alternate work sites.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"3.136.b",
//                             type:"control",
//                             title:"Safeguarding measures for CUI are enforced for alternate work sites.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Safeguarding measures for CUI are enforced for alternate work sites.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 },
//             ]
//         },
//         {
//             cid:"12",
//             type: "domain",
//             title: "RISK ASSESSMENT",
//             isLeaf_control:false,
//             child_controls:[
//                 {
//                     cid:"2.141",
//                     type:"control",
//                     title:"Periodically assess the risk to organizational operations (including mission, functions, image, or reputation), organizational assets, and individuals, resulting from the operation of organizational systems and the associated processing, storage, or transmission of CUI.",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"2.141.a",
//                             type:"control",
//                             title:"The frequency to assess risk to organizational operations, organizational assets, and individuals is defined.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"The frequency to assess risk to organizational operations, organizational assets, and individuals is defined.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.141.b",
//                             type:"control",
//                             title:"Risk to organizational operations, organizational assets, and individuals resulting from the operation of an organizational system that processes, stores, or transmits CUI is assessed with the defined frequency.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Risk to organizational operations, organizational assets, and individuals resulting from the operation of an organizational system that processes, stores, or transmits CUI is assessed with the defined frequency.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 },
//                 {
//                     cid:"2.142",
//                     type:"control",
//                     title:"Scan for vulnerabilities in organizational systems and applications periodically and when new vulnerabilities affecting those systems and applications are identified.",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"2.142.a",
//                             type:"control",
//                             title:"The frequency to scan for vulnerabilities in organizational systems and applications is defined.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"The frequency to scan for vulnerabilities in organizational systems and applications is defined.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.142.b",
//                             type:"control",
//                             title:"Vulnerability scans are performed on organizational systems with the defined frequency.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Vulnerability scans are performed on organizational systems with the defined frequency.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.142.c",
//                             type:"control",
//                             title:"Vulnerability scans are performed on applications with the defined frequency.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Vulnerability scans are performed on applications with the defined frequency.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.142.d",
//                             type:"control",
//                             title:"Vulnerability scans are performed on organizational systems when new vulnerabilities are identified.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Vulnerability scans are performed on organizational systems when new vulnerabilities are identified.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.142.e",
//                             type:"control",
//                             title:"Vulnerability scans are performed on applications when new vulnerabilities are identified.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Vulnerability scans are performed on applications when new vulnerabilities are identified.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 },
//                 {
//                     cid:"2.143",
//                     type:"control",
//                     title:"Remediate vulnerabilities in accordance with risk assessments.",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"2.143.a",
//                             type:"control",
//                             title:"Vulnerabilities are identified.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Vulnerabilities are identified.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.143.b",
//                             type:"control",
//                             title:"Vulnerabilities are remediated in accordance with risk assessments.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Vulnerabilities are remediated in accordance with risk assessments.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 },

//             ]
//         },
//         {
//             cid:"13",
//             type: "domain",
//             title: "SECURITY ASSESSMENT",
//             isLeaf_control:false,
//             child_controls:[
//                 {
//                     cid:"2.158",
//                     type:"control",
//                     title:"Periodically assess the security controls in organizational systems to determine if the controls are effective in their application.",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"2.158.a",
//                             type:"control",
//                             title:"The frequency of security control assessments is defined.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"The frequency of security control assessments is defined.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.158.b",
//                             type:"control",
//                             title:"Security controls are assessed with the defined frequency to determine if the controls are effective in their application.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Security controls are assessed with the defined frequency to determine if the controls are effective in their application.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 },
//                 {
//                     cid:"2.159",
//                     type:"control",
//                     title:"Develop and implement plans of action designed to correct deficiencies and reduce or eliminate vulnerabilities in organizational systems.",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"2.159.a",
//                             type:"control",
//                             title:"Deficiencies and vulnerabilities to be addressed by the plan of action are identified.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Deficiencies and vulnerabilities to be addressed by the plan of action are identified.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.159.b",
//                             type:"control",
//                             title:"A plan of action is developed to correct identified deficiencies and reduce or eliminate identified vulnerabilities.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"A plan of action is developed to correct identified deficiencies and reduce or eliminate identified vulnerabilities.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.159.c",
//                             type:"control",
//                             title:"The plan of action is implemented to correct identified deficiencies and reduce or eliminate identified vulnerabilities.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"The plan of action is implemented to correct identified deficiencies and reduce or eliminate identified vulnerabilities.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 },
//                 {
//                     cid:"3.161",
//                     type:"control",
//                     title:"Monitor security controls on an ongoing basis to ensure the continued effectiveness of the controls.",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"3.161.a",
//                             type:"control",
//                             title:"Determine if security controls are monitored on an ongoing basis to ensure the continued effectiveness of those controls.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Determine if security controls are monitored on an ongoing basis to ensure the continued effectiveness of those controls.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 },
//                 {
//                     cid:"2.157",
//                     type:"control",
//                     title:"Develop, document, and periodically update system security plans that describe system boundaries, system environments of operation, how security requirements are implemented, and the relationships with or connections to other systems.",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"2.157.a",
//                             type:"control",
//                             title:"A system security plan is developed.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"A system security plan is developed.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.157.b",
//                             type:"control",
//                             title:"The system boundary is described and documented in the system security plan.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"The system boundary is described and documented in the system security plan.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.157.c",
//                             type:"control",
//                             title:"The system environment of operation is described and documented in the system security plan.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"The system environment of operation is described and documented in the system security plan.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.157.d",
//                             type:"control",
//                             title:"The security requirements identified and approved by the designated authority as non-applicable are identified.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"The security requirements identified and approved by the designated authority as non-applicable are identified.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.157.e",
//                             type:"control",
//                             title:"The method of security requirement implementation is described and documented in the system security plan.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"The method of security requirement implementation is described and documented in the system security plan.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.157.f",
//                             type:"control",
//                             title:"The relationship with or connection to other systems is described and documented in the system security plan.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"The relationship with or connection to other systems is described and documented in the system security plan.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.157.g",
//                             type:"control",
//                             title:"The frequency to update the system security plan is defined.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"The frequency to update the system security plan is defined.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.157.h",
//                             type:"control",
//                             title:"System security plan is updated with the defined frequency.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"System security plan is updated with the defined frequency.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 },

//             ]
//         },
//         {
//             cid:"14",
//             type: "domain",
//             title: "SYSTEM AND COMMUNICATIONS PROTECTION",
//             isLeaf_control:false,
//             child_controls:[
//                 {
//                     cid:"1.175",
//                     type:"control",
//                     title:"Monitor, control, and protect communications (i.e., information transmitted or received by organizational systems) at the external boundaries and key internal boundaries of organizational systems.",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"1.175.a",
//                             type:"control",
//                             title:"The external system boundary is defined.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"The external system boundary is defined.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"1.175.b",
//                             type:"control",
//                             title:"Key internal system boundaries are defined.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Key internal system boundaries are defined.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"1.175.c",
//                             type:"control",
//                             title:"Communications are monitored at the external system boundary.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Communications are monitored at the external system boundary.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"1.175.d",
//                             type:"control",
//                             title:"Communications are monitored at key internal boundaries.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Communications are monitored at key internal boundaries.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"1.175.e",
//                             type:"control",
//                             title:"Communications are controlled at the external system boundary.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Communications are controlled at the external system boundary.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"1.175.f",
//                             type:"control",
//                             title:"Communications are controlled at key internal boundaries.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Communications are controlled at key internal boundaries.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"1.175.g",
//                             type:"control",
//                             title:"Communications are protected at the external system boundary.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Communications are protected at the external system boundary.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"1.175.h",
//                             type:"control",
//                             title:"Communications are protected at key internal boundaries.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Communications are protected at key internal boundaries.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 },
//                 {
//                     cid:"4.228",
//                     type:"control",
//                     title:"Employ architectural designs, software development techniques, and systems engineering principles that promote effective information security within organizational systems.",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"4.228.a",
//                             type:"control",
//                             title:"Architectural designs that promote effective information security are identified.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Architectural designs that promote effective information security are identified.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"4.228.b",
//                             type:"control",
//                             title:"Software development techniques that promote effective information security are identified.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Software development techniques that promote effective information security are identified.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"4.228.c",
//                             type:"control",
//                             title:"Systems engineering principles that promote effective information security are identified.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Systems engineering principles that promote effective information security are identified.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"4.228.d",
//                             type:"control",
//                             title:"Identified architectural designs that promote effective information security are employed.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Identified architectural designs that promote effective information security are employed.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"4.228.e",
//                             type:"control",
//                             title:"Identified software development techniques that promote effective information security are employed.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Identified software development techniques that promote effective information security are employed.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"4.228.f",
//                             type:"control",
//                             title:"Identified systems engineering principles that promote effective information security are employed.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Identified systems engineering principles that promote effective information security are employed.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 },
//                 {
//                     cid:"3.181",
//                     type:"control",
//                     title:"Separate user functionality from system management functionality.",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"3.181.a",
//                             type:"control",
//                             title:"User functionality is identified.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"User functionality is identified.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"3.181.b",
//                             type:"control",
//                             title:"System management functionality is identified.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"System management functionality is identified.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"3.181.c",
//                             type:"control",
//                             title:"User functionality is separated from system management functionality.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"User functionality is separated from system management functionality.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 },
//                 {
//                     cid:"3.182",
//                     type:"control",
//                     title:"Prevent unauthorized and unintended information transfer via shared system resources.",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"3.182.a",
//                             type:"control",
//                             title:"Determine if unauthorized and unintended information transfer via shared system resources is prevented.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Determine if unauthorized and unintended information transfer via shared system resources is prevented.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 },
//                 {
//                     cid:"1.176",
//                     type:"control",
//                     title:"Implement subnetworks for publicly accessible system components that are physically or logically separated from internal networks.",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"1.176.a",
//                             type:"control",
//                             title:"Publicly accessible system components are identified.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Publicly accessible system components are identified.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"1.176.a",
//                             type:"control",
//                             title:"Subnetworks for publicly accessible system components are physically or logically separated from internal networks.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Subnetworks for publicly accessible system components are physically or logically separated from internal networks.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }

//                     ]
//                 },
//                 {
//                     cid:"3.183",
//                     type:"control",
//                     title:"Deny network communications traffic by default and allow network communications traffic by exception (i.e., deny all, permit by exception).",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"3.183.a",
//                             type:"control",
//                             title:"Network communications traffic is denied by default.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Network communications traffic is denied by default.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"3.183.a",
//                             type:"control",
//                             title:"Network communications traffic is allowed by exception.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Network communications traffic is allowed by exception.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }

//                     ]
//                 },
//                 {
//                     cid:"3.184",
//                     type:"control",
//                     title:"Prevent remote devices from simultaneously establishing non-remote connections with organizational systems and communicating via some other connection to resources in external networks (i.e., split tunneling).",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"3.184.a",
//                             type:"control",
//                             title:"Determine if remote devices are prevented from simultaneously establishing non-remote connections with the system and communicating via some other connection to resources in external networks (i.e., split tunneling).",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Determine if remote devices are prevented from simultaneously establishing non-remote connections with the system and communicating via some other connection to resources in external networks (i.e., split tunneling).",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 },
//                 {
//                     cid:"3.185",
//                     type:"control",
//                     title:"Implement cryptographic mechanisms to prevent unauthorized disclosure of CUI during transmission unless otherwise protected by alternative physical safeguards.",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"3.185.a",
//                             type:"control",
//                             title:"Cryptographic mechanisms intended to prevent unauthorized disclosure of CUI are identified.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Cryptographic mechanisms intended to prevent unauthorized disclosure of CUI are identified.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"3.185.a",
//                             type:"control",
//                             title:"Alternative physical safeguards intended to prevent unauthorized disclosure of CUI are identified.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Alternative physical safeguards intended to prevent unauthorized disclosure of CUI are identified.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"3.185.a",
//                             type:"control",
//                             title:"Either cryptographic mechanisms or alternative physical safeguards are implemented to prevent unauthorized disclosure of CUI during transmission.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Either cryptographic mechanisms or alternative physical safeguards are implemented to prevent unauthorized disclosure of CUI during transmission.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 },
//                 {
//                     cid:"3.186",
//                     type:"control",
//                     title:"Terminate network connections associated with communications sessions at the end of the sessions or after a defined period of inactivity.",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"3.186.a",
//                             type:"control",
//                             title:"A period of inactivity to terminate network connections associated with communications sessions is defined.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"A period of inactivity to terminate network connections associated with communications sessions is defined.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"3.186.b",
//                             type:"control",
//                             title:"Network connections associated with communications sessions are terminated at the end of the sessions.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Network connections associated with communications sessions are terminated at the end of the sessions.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"3.186.c",
//                             type:"control",
//                             title:"Network connections associated with communications sessions are terminated after the defined period of inactivity.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Network connections associated with communications sessions are terminated after the defined period of inactivity.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 },
//                 {
//                     cid:"3.187",
//                     type:"control",
//                     title:"Establish and manage cryptographic keys for cryptography employed in organizational systems.",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"3.187.a",
//                             type:"control",
//                             title:"Cryptographic keys are established whenever cryptography is employed.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Cryptographic keys are established whenever cryptography is employed.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"3.187.b",
//                             type:"control",
//                             title:"Cryptographic keys are managed whenever cryptography is employed.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Cryptographic keys are managed whenever cryptography is employed.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 },
//                 {
//                     cid:"3.177",
//                     type:"control",
//                     title:"Employ FIPS-validated cryptography when used to protect the confidentiality of CUI.",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"3.177.a",
//                             type:"control",
//                             title:"Determine if FIPS-validated cryptography is employed to protect the confidentiality of CUI.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Determine if FIPS-validated cryptography is employed to protect the confidentiality of CUI.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 },
//                 {
//                     cid:"2.178",
//                     type:"control",
//                     title:"Prohibit remote activation of collaborative computing devices and provide indication of devices in use to users present at the device.",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"2.178.a",
//                             type:"control",
//                             title:"Collaborative computing devices are identified.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Collaborative computing devices are identified.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.178.b",
//                             type:"control",
//                             title:"Collaborative computing devices provide indication to users of devices in use.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Collaborative computing devices provide indication to users of devices in use.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.178.c",
//                             type:"control",
//                             title:"Remote activation of collaborative computing devices is prohibited.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Remote activation of collaborative computing devices is prohibited.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 },
//                 {
//                     cid:"3.188",
//                     type:"control",
//                     title:"Control and monitor the use of mobile code.",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"3.188.a",
//                             type:"control",
//                             title:"Use of mobile code is controlled.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Use of mobile code is controlled.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"3.188.b",
//                             type:"control",
//                             title:"Use of mobile code is monitored.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Use of mobile code is monitored.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 },
//                 {
//                     cid:"3.189",
//                     type:"control",
//                     title:"Control and monitor the use of Voice over Internet Protocol (VoIP) technologies.",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"3.189.a",
//                             type:"control",
//                             title:"Use of Voice over Internet Protocol (VoIP) technologies is controlled.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Use of Voice over Internet Protocol (VoIP) technologies is controlled.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"3.189.b",
//                             type:"control",
//                             title:"Use of Voice over Internet Protocol (VoIP) technologies is monitored.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Use of Voice over Internet Protocol (VoIP) technologies is monitored.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 },
//                 {
//                     cid:"3.190",
//                     type:"control",
//                     title:"Protect the authenticity of communications sessions.",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"3.190.a",
//                             type:"control",
//                             title:"Determine if the authenticity of communications sessions is protected.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Determine if the authenticity of communications sessions is protected.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }

//                     ]
//                 },
//                 {
//                     cid:"3.191",
//                     type:"control",
//                     title:"Protect the confidentiality of CUI at rest.",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"3.191.a",
//                             type:"control",
//                             title:"Determine if the confidentiality of CUI at rest is protected.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Determine if the confidentiality of CUI at rest is protected.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }

//                     ]
//                 }

//             ]
//         },
//         {
//             cid:"15",
//             type: "domain",
//             title: "SYSTEM AND INFORMATION INTEGRITY",
//             isLeaf_control:false,
//             child_controls:[
//                 {
//                     cid:"1.210",
//                     type:"control",
//                     title:"Identify, report, and correct system flaws in a timely manner.",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"1.210.a",
//                             type:"control",
//                             title:"The time within which to identify system flaws is specified.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"The time within which to identify system flaws is specified.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"1.210.b",
//                             type:"control",
//                             title:"System flaws are identified within the specified time frame.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"System flaws are identified within the specified time frame.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"1.210.c",
//                             type:"control",
//                             title:"The time within which to report system flaws is specified.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"The time within which to report system flaws is specified.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"1.210.d",
//                             type:"control",
//                             title:"System flaws are reported within the specified time frame.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"System flaws are reported within the specified time frame.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"1.210.e",
//                             type:"control",
//                             title:"The time within which to correct system flaws is specified.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"The time within which to correct system flaws is specified.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"1.210.f",
//                             type:"control",
//                             title:"System flaws are corrected within the specified time frame.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"System flaws are corrected within the specified time frame.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 },
//                 {
//                     cid:"1.211",
//                     type:"control",
//                     title:"Provide protection from malicious code at designated locations within organizational systems.",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"1.211.a",
//                             type:"control",
//                             title:"Designated locations for malicious code protection are identified.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Designated locations for malicious code protection are identified.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"1.211.b",
//                             type:"control",
//                             title:"Protection from malicious code at designated locations is provided.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Protection from malicious code at designated locations is provided.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }
//                     ]
//                 },
//                 {
//                     cid:"2.214",
//                     type:"control",
//                     title:"Monitor system security alerts and advisories and take action in response.",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"2.214.a",
//                             type:"control",
//                             title:"Response actions to system security alerts and advisories are identified.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Response actions to system security alerts and advisories are identified.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.214.b",
//                             type:"control",
//                             title:"System security alerts and advisories are monitored.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"System security alerts and advisories are monitored.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.214.c",
//                             type:"control",
//                             title:"Actions in response to system security alerts and advisories are taken.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Actions in response to system security alerts and advisories are taken.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }

//                     ]
//                 },
//                 {
//                     cid:"1.212",
//                     type:"control",
//                     title:"Update malicious code protection mechanisms when new releases are available.",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"1.212.a",
//                             type:"control",
//                             title:"Determine if malicious code protection mechanisms are updated when new releases are available.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Determine if malicious code protection mechanisms are updated when new releases are available.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }

//                     ]
//                 },
//                 {
//                     cid:"2.213",
//                     type:"control",
//                     title:"Perform periodic scans of organizational systems and real-time scans of files from external sources as files are downloaded, opened, or executed.",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"2.213.a",
//                             type:"control",
//                             title:"The frequency for malicious code scans is defined.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"The frequency for malicious code scans is defined.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.213.b",
//                             type:"control",
//                             title:"Malicious code scans are performed with the defined frequency.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Malicious code scans are performed with the defined frequency.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.213.c",
//                             type:"control",
//                             title:"Real-time malicious code scans of files from external sources as files are downloaded, opened, or executed are performed.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Real-time malicious code scans of files from external sources as files are downloaded, opened, or executed are performed.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }

//                     ]
//                 },
//                 {
//                     cid:"2.216",
//                     type:"control",
//                     title:"Monitor organizational systems, including inbound and outbound communications traffic, to detect attacks and indicators of potential attacks.",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"2.216.a",
//                             type:"control",
//                             title:"The system is monitored to detect attacks and indicators of potential attacks.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"The system is monitored to detect attacks and indicators of potential attacks.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.216.b",
//                             type:"control",
//                             title:"Inbound communications traffic is monitored to detect attacks and indicators of potential attacks.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Inbound communications traffic is monitored to detect attacks and indicators of potential attacks.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.216.c",
//                             type:"control",
//                             title:"Outbound communications traffic is monitored to detect attacks and indicators of potential attacks.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Outbound communications traffic is monitored to detect attacks and indicators of potential attacks.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }

//                     ]
//                 },
//                 {
//                     cid:"2.217",
//                     type:"control",
//                     title:"Identify unauthorized use of organizational systems.",
//                     isLeaf_control: false,
//                     mandotary: true,
//                     architecture:"1",
//                     child_controls: [
//                         {
//                             cid:"2.217.a",
//                             type:"control",
//                             title:"Authorized use of the system is defined.",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Authorized use of the system is defined.",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         },
//                         {
//                             cid:"2.217.b",
//                             type:"control",
//                             title:"Unauthorized use of the system is identified. ",
//                             isLeaf_control: true,
//                             mandotary: true,
//                             architecture:"1",
//                             question: {
//                                 question:"Unauthorized use of the system is identified. ",
//                                 answer_options:["FI", "PI", "NI", "NA", "PL", "AI"],
//                                 alternative_question: false
//                             }
//                         }

//                     ]
//                 },
//             ]
//         },
//     ]

// } 
