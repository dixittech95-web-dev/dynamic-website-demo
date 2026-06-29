require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/product');

async function seedDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("full processs.env", process.env);

        const allProduct = [
            {
                "labName": "AUTOMOBILE & I.C. ENGINE LAB",
                "category": "mechanical",
                "productName": "(II)	Multi Cylinder Car Engine - Petrol & Diesel Actual Cut Section Working Models",
                "shortDesc": "The engine will be sectioned to show the internal constructional details. The working of individual part and accessories like Valves, Pistons, pumps, Crank and Camshaft, etc. ",
                "desc": "The engine will be sectioned to show the internal constructional details. The working of individual part and accessories like Valves, Pistons, pumps, Crank and Camshaft, etc. will be demonstrated. It is provided with Flywheel and it is mounted on a sturdy iron frame,This actual cut section engine helps the student to understand about the parts and the working of the engine very easily. It is specially made dissectible for demonstration purposes,The actual cut section engine will be supplied with key card & very interesting literature regarding working.",
                "images": [
                    {"url": "public/image/Dial002a.png", "caption": "4 Stroke 4/3 Cylinder Petrol Engine \nDIAL002 A"}, 
                    {"url": "public/image/Dial002b.png", "caption": "4 Stroke 4 Cylinder Diesel Engine\n DIAL002 B \n Motor Driven Actual Cut Section Working Model with Valve Timing Attachment"},
                    {"url": "public/image/Dial002c.png", "caption": "4 Stroke 6 Cylinder Petrol Engine (V-6)\n DIAL002 C \n Motor Driven Actual Cut Section Working Mode"},
                    {"url": "public/image/Dial002d.png", "caption": "4 Stroke 6 Cylinder Diesel Engine\n DIAL002 D \n Motor Driven Actual Cut Section Working Mode"},
                ],
                "featured": "true"
            },
            {
                "labName": "AUTOMOBILE & I.C. ENGINE LAB",
                "category": "mechanical",
                "productName": "(III)	Steering System - Actual Working",
                "desc": "Manual Steering System The working of steering system is shown with the help of actual parts assembled on square iron pipe frame. All the necessary parts of steering system are shown in actual working form.This model helps the student to understand the working of the steering system very easily. It is specially made dissectible for demonstration purposes. ",
                "shortDesc": "The working of steering system is shown with the help of actual parts assembled on square iron pipe frame. ",
                "images": [
                    {"url": "public/image/Dial003a.png", "caption": "Rack & Pinion Type Steering System \n DIAL003 A - Actual Working "},
                    {"url": "public/image/Dial003b.png", "caption": "Worm & Roller Type Steering System\n DIAL003 B - Actual Working"},
                    {"url": "public/image/Dial003c.png", "caption": "Recalculating Ball Type Steering"},
                    {"url": "public/image/Dial003d.png", "caption": "Worm & Roller Type Steering System"},
                    {"url": "public/image/Dial003e.png", "caption": "Worm & Roller Type Steering System"},
                ],
                "featured": "false"
            },
             {
                "labName": "AUTOMOBILE & I.C. ENGINE LAB",
                "category": "mechanical",
                "productName": "Power Steering System",
                "desc": "The working of steering system is shown with the help of actual parts assembled on square iron pipe frame. All the necessary parts of steering system are shown in actual working form.This model helps the student to understand the working of the steering system very easily. It is specially made dissectible for demonstration purposes.",
                "shortDesc": "The working of steering system is shown with the help of actual parts assembled on square iron pipe frame.",
                "images": [
                    {"url": "public/image/Dial004a.png", "caption": "Electrical Power Steering System \n DIAL004 A - Actual Working "},
                    {"url": "public/image/Dial004b.png", "caption": "Hydraulic Power Steering System\n DIAL004 B - (Motorised) Actual Working"},
                    {"url": "public/image/Dial004c.png", "caption": "Power Steering Trainer System\n DIAL004 C - Actual Working"},
                ],
                "featured": "false"
            },
             {
                "labName": "AUTOMOBILE & I.C. ENGINE LAB",
                "category": "mechanical",
                "productName": "Steering Geometry  & Wheel Alignment Trainer",
                "desc": "With the help of this trainer the students can learn about steering geometry and practically perform wheel alignment using various tools.\n (I) Turn Tables	\n(II) Toe in Toe Out Guage	\n(III) Magnetic Caster Camber Guage	\n(IV) Tool Kit \n(V)	Manual Steering System With Four Wheels ",
                "shortDesc": "With the help of this trainer the students can learn about steering geometry and practically perform wheel alignment using various tools.",
                "images": [
                    {"url": "public/image/Dial005.png", "caption": "Manual Steering System with Four Wheels"},
                    {"url": "public/image/Dial005a.png", "caption": "Magnetic Caster Camber Gauge"},
                    {"url": "public/image/Dial005b.jpg", "caption": "Turn Tables"},
                    {"url": "public/image/Dial005c.png", "caption": "Tool Kit"},
                ],
                "featured": "false"
            },
            {
                "labName": "AUTOMOBILE & I.C. ENGINE LAB",
                "category": "mechanical",
                "productName": "(IV) Gear Box - Actual Cut Section (Working Models)",
                "desc": "The working of Gear box is shown with the help of actual parts assembled on square iron pipe frame. All the necessary parts of Gear box are shown in actual working form.This model helps the student to understand the working of the Gear box very easily. It is specially made dissectible for demonstration purposes.",
                "shortDesc": "The working of Gear box is shown with the help of actual parts assembled on square iron pipe frame.",
                "images": [
                    {"url": "public/image/Dial006a.png", "caption": "Synchromesh Gear Box 4 Forward & 1 Reverse\nDIAL006 A Actual Cut Section"},
                    {"url": "public/image/Dial006b.png", "caption": "Synchromesh Gear Box 4 Forward & 1 Reverse \nDIAL006 B Actual Cut Section With Single Plate Clutch"},
                    {"url": "public/image/Dial006c.png", "caption": "Constant Mesh Gear\nDIAL006 C Actual Cut Section"},
                    {"url": "public/image/Dial006d.png", "caption": "TTransaxle Gear Box with Differential"},
                    {"url": "public/image/Dial008.png", "caption": "Transfer Case Assembly \n DIAL007 - Actual Cut Section\nThe working of transfer case is shown with the help of actual parts assembled on square iron pipe frame. All the necessary parts of transfer case are shown in actual working form. This model helps the student to understand the working of the transfer case very easily. It is specially made dissectible for demonstration purposes"},
                    {"url": "public/image/Dial009.png", "caption": "Automatic Gear Box\n DIAL008 - Actual Cut Section\n The working of automatic gear box is shown with the help of actual parts assembled on square iron pipe frame. All the necessary parts of automatic gear box are shown in actual working form.This model helps the student to understand the working of the automatic gear box very easily. It is specially made dissectible for demonstration purposes"},
                ],
                "featured": "false"
            },
            {
                "labName": "AUTOMOBILE & I.C. ENGINE LAB",
                "category": "mechanical",
                "productName": "(V) DIFFERNTIAL GEAR - ACTUAL CUT SECTION (Working Model)",
                "desc": "DIAL010 - Differential Gear Assembly - Actual Cut Section The working of differential gear is shown with the help of actual parts assembled on square iron pipe frame. All the necessary parts of differential gear are shown in actual working form.This model helps the student to understand the working of the differential gear very easily. It is specially made dissectible for demonstration purposes",

                "shortDesc": "TThe working of differential gear is shown with the help of actual parts assembled on square iron pipe frame",
                "images": [
                    {"url": "public/image/Dial010.png", "caption": ""},
                    {"url": "public/image/Dial011.png", "caption": "Rear Axial Assembly With Differential Gear Fully Floating Type\nDIAL011 - Actual Cut Section"},
                    {"url": "public/image/Dial012.png", "caption": "Rear Axial Assembly With Differential Gear Semi Floating Type\nDIAL012 - Actual Cut Section"},
                ],
                "featured": "false"
            },
             {
                "labName": "AUTOMOBILE & I.C. ENGINE LAB",
                "category": "mechanical",
                "productName": "(VI)	CHASSIS - ACTUAL CUT SECTION (Working Models)",
                "desc": "DIAL013 - Car Chassis Rear Wheel Drive Actual Cut Section - Motorized 4 Stroke 4 Petrol Engine With Clutch, Gear Box, Propeller Shaft & Rear Axle Assembly With Differential Gear The chassis of the four stroke four cylinder engine cut section model,The cut section model is constructed such that all the following systems can be demonstrated in working conditions.\n Engine : Maximum parts and accessories of an engine like cylinders, cylinder head, inlet and Exhaust manifolds, FIP. injectors, self-starter, alternator, water pump, radiator. etc., are sectioned to show the internal constructional details,The complete sectioned model is coupled with FHP 220/230V A.C single phase motor through a Reduction drive unit. \nTransmission System : This system consists of a Clutch and four speed gearbox assembly, the casing of which is suitably cut to demonstrate its operation. \nThe gearbox is coupled to Differential gear box with propeller shaft and the different coupling used for this transmission can be demonstrated.The Differential gear box is also cut so as to clearly to demonstrate its complete operating principle.The gear shifting including the forward and reverse gear operation can be clearly shown,The speed variation and the rotation of the Differential gear box can be seen while gear shifting. By running the motor connected to the engine assembly the entire system with gear box, rear axle etc. can be demonstrated in running.\n Fuel System : The Fuel tank is cut to expose the mounting of the level sensor and the position of Fuel section The system is complete With mechanical Fuel pump.\n Exhaust System : It consists of Exhaust Manifold and silencer in cut section to explain internal construction.\n Lubrication System : It consists of the engine Lubrication system along with the Lubrication Oil pump is suitably sectioned.\n Suspension System : This will explain both the Hydraulic Suspension systems at the front and the leaf spring Suspension at the Rear. One of the hydraulic arrangements of Suspension mechanism is highlighted (with shock absorbers) and explained cut section ally.\n Braking System : The Hydraulic or Air circuit Brakes.The movement of the Brake Shoes on operating the ",

                "shortDesc": "The chassis of the four stroke four cylinder engine cut section model,The cut section model is constructed such that all the following systems can be demonstrated in working conditions.",
                "images": [
                    {"url": "public/image/Dial013.png", "caption": ""},
                    {"url": "public/image/Dial014.png", "caption": "DIAL014 - Car Chassis Front Wheel Drive - Actual Cut Section - Motorized 4 Stroke 4 Cylinder Petrol Engine with Clutch, Gear Box & Differential Gear"},
                    {"url": "public/image/Dial014a.png", "caption": "DIAL014a - Car Chassis All Wheel Drive - Actual Cut Section - Motorized 4 Stroke 4 Cylinder Petrol Engine with Clutch, Gear Box & Differential Gear"},
                ],
                "featured": "false"
            },
            {
                "labName": "THEORY OF MACHINE LAB",
                "category": "mechanical",
                "productName": "DIT501 - STATIC & DYNAMIC BALANCING APPARATUS",
                "desc": "This equipment is designed for carrying out the experiment for balancing a rotation mass system.The apparatus consists of a stainless steel shaft fixed in a rectangular frame. A set of four blocks with a clamping arrangement is provided. For static balancing, each block is individually clamped on shaft and its relative weight is found out using cord and container system in terms of number of steel balls. For dynamic balancing, a moment polygon is drawn using relative weights and angular and axial position of blocks is determined. The block are clamped on Shaft is rotated by a motor to check dynamic balance of the system.The system is provided with angular and longitudinal scales and is suspended with chains for dynamic balancing.This equipment is designed for carrying out the experiment for balancing a rotation mass system.The apparatus consists of a stainless steel shaft fixed in a rectangular frame. A set of four blocks with a clamping arrangement is provided. For static balancing, each block is individually clamped on shaft and its relative weight is found out using cord and container system in terms of number of steel balls. For dynamic balancing, a moment polygon is drawn using relative weights and angular and axial position of blocks is determined. The block are clamped on Shaft is rotated by a motor to check dynamic balance of the system.The system is provided with angular and longitudinal scales and is suspended with chains for dynamic balancing.\n Experiments \n1.	To balance the masses statically and dynamically of a single rotating mass system. \n2.	To observe the effect of unbalance in a rotating mass system.\nTechnical Specification \n*	Drive Motor FHP Motor, variable speed, with speed controller \n*	Balancing Weight 4 Nos. of Stainless Steel with different sized eccentric Mass for varying unbalance \n*	Rotating Shaft -- Material Stainless Steel \n*	The whole Set-up is well designed and arranged in a good quality painted Structure. \n Utilities\n*	Electricity 0.5 kw, 220 V, Single Phase.",

                "shortDesc": "This equipment is designed for carrying out the experiment for balancing a rotation mass system.The apparatus consists of a stainless steel shaft fixed in a rectangular frame",
                "images": [
                    {"url": "public/image/Dit501.png", "caption": ""},
                ],
                "featured": "true"
            },
            {
                "labName": "THEORY OF MACHINE LAB",
                "category": "mechanical",
                "productName": "DIT502 - MOTORISED GYROSCOPE APPARATUS",
                "desc": "The apparatus consists of a rotor mounted in bearings.This rotor is free to rotate about \n(I)  Its own axis i.e. axis of spin. \n(ii)	Axis of precession. \n(iii)	Axis of gyroscopic couple \nThe rotor is connected to the variable speed motor.The weight of the motor is balanced by another weight, which is \non either side of the rotor. By putting weights on the weight platform torque can be supplied to rotor, which is \nalso called gyroscopic couple. \nSpecification\n1. Rotor dia. 250mm free about 3 axis of rotation driven by variable speed motor. \n2.	Dimmerstat to control the motor speed. \n3.	Stopwatch to measure the angular speed about the axis of precession. \n4.	Weights - 0.2 kg, 0.5 kg and 1 kg \nA technical manual accompanies the unit. \nServices Required \n*	220V stabilized AC supply with earthing connection. \n*	Bench area • 0.5 x 0.5m at working height. \n*	Tachometer for speed measurement (can be supplied at extra cost).",

                "shortDesc": "The apparatus consists of a rotor mounted in bearings.This rotor is free to rotate about",
                "images": [
                    {"url": "public/image/Dit502.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "THEORY OF MACHINE LAB",
                "category": "mechanical",
                "productName": "DIT503 - MOTORISED GOVERNOR APPARATUS",
                "desc": "The unit consists of a main spindle driven by a variable speed motor.Three different governor assemblies can be mounted over the spindle. Pointer measures the lift of the governor. Students can calculate characteristics of governor and compare their performance viz. Sensitiveness, stability, governor effort etc.\nSpecification\n 1.	Governor assemblies - Hartnell, porter & propel governor assembly one each with rotating weights.\n 2.	Variable speed FHP D.C. motor to drive the main spindle,\n 3.	Sliding weights for porter & proell governor.\n 4.	Scale & a pointer to measure governor lift.\n 5.	Spring & Spring compression adjustment arrangement.\n Services Required\n *	230V, 5A, AC supply connection.\n *	Bench area of 0. 75 x 1m. at working height.",

                "shortDesc": "The unit consists of a main spindle driven by a variable speed motor.Three different governor assemblies can be mounted over the spindle",
                "images": [
                    {"url": "public/image/Dit503.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "THEORY OF MACHINE LAB",
                "category": "mechanical",
                "productName": "DIT504 - WHIRLING OF SHAFT APPARATUS",
                "desc": "The unit consists of a base upon which the bearing holders and driving motor and bearing can be fitted in a holders to end conditions for test shafts. Both end fixed and one end free, one end fixed. A Variac provides control of driving motor.The unit demonstrates the phenomenon of whirling of shafts with single rotor. As the test is destructive, after the test same shaft cannot be used again, hence the unit only demonstrates the principle. However, results obtained are closer to theory, as compared to those with bare shafts. Also, It can be demonstrated that, after passing whirling speed, shaft again starts running true.\nSpecification\n 1.	Test shaft - 4.75 mm. 6.35 mm and 7.9 mm - 2 each.\n 2.	Bearing to provided end conditions, (a) Both ends fixed, (b) One end fixed and one end free.\n 3.	Drive motor 1/8 HP. 1500 rpm with control arrangement,\n 4.	The whole unit is mounted on a sturdy base.\n 5.	Rotor for each shaft of suitable size.\n 6.	A technical manual accompanies the unit.\n Services Required\n 1.	Floor space area of 2m x 1m at working height.\n 2.	230V, 15 A, AC electric supply connection",

                "shortDesc": "The unit consists of a base upon which the bearing holders and driving motor and bearing can be fitted in a holders to end conditions for test shafts.",
                "images": [
                    {"url": "public/image/Dit504.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "THEORY OF MACHINE LAB",
                "category": "mechanical",
                "productName": "DIT505 - CAM ANALYSIS APPARATUS",
                "desc": "The apparatus is designed to Study the cam profiles and performance of cam and follower system.The apparatus consists of a shaft supported by ball bearings upon which three different types of cams can be mounted.The push rod for follower is supported vertically, which can adopt three different types of followers. Cams and followers can be changed easily. A variable speed motor rotates the cam. A dial gauge permits plotting of follower displacement with respect to cam position By operating the system at different Speeds, jump speed can be found and also the effect of weight and spring on jump speed can be studied. Jump can be visualized also with the help of stroboscope (it is not supplied With product).\n Specification \n1.	Cam -Eccentric, tangent and circular ARC type - one each \n2.	Follower, mushroom. flat faced and roller type - one each \n3.	Cams and followers are hardened to reduce wear of the surfaces. \n4.	Variable speed motor coupled to camshaft of suitable range and Variac. \n5.	A dial gauge to note the follower displacement. A technical manual accompanies the unit. \nServices Required \n*	230 V, A.C. stabilized supply along with earthing connection. \n*	Bench area 0.5m x O. 5m x 0.5m height.\n*	Tachometer to measure the jumping speed. (can be supplied extra)",

                "shortDesc": "The apparatus is designed to Study the cam profiles and performance of cam and follower system",
                "images": [
                    {"url": "public/image/Dit505.png", "caption": ""},
                ],
                "featured": "false"
            },
            
            {
                "labName": "THEORY OF MACHINE LAB",
                "category": "mechanical",
                "productName": "DIT506 - GENERATION OF INVOLUTE GEAR TOOTH PROFILE",
                "desc": "This board illustrates the process of cutting of involutes Gear Teeth, by use of rack type cutter It consists of 3 white acrylic discs A, B, C, having pitch circle diameter 450 mm, 300 mm & 200 mm respectively. A gear tooth profile with module 25mm can be traced out on a peace of paper placed between disc and cutter. An affect of Interference and Undercutting on correct profile of gear tooth can be studied from the profiles traced.",

                "shortDesc": "This board illustrates the process of cutting of involutes Gear Teeth, by use of rack type cutter It consists of 3 white acrylic discs A, B, C, having pitch circle diameter 450 mm, 300 mm & 200 mm respectively",
                "images": [
                ],
                "featured": "false"
            },
            {
                "labName": "THEORY OF MACHINE LAB",
                "category": "mechanical",
                "productName": "DIT507 - INTERFERENCE & UNDERCUTTING",
                "desc": "The board shows the demonstration of this phenomenon of Interference and Undercutting.When we rotate the teeth in anticlockwise direction, as the teeth is undercut is gives us a smooth working.When we give a rotation in clockwise direction, we can observe that the rack tip will be resisted by the tooth flank thus giving interference",

                "shortDesc": "The board shows the demonstration of this phenomenon of Interference and Undercutting.When we rotate the ..",
                "images": [
                ],
                "featured": "false"
            },
            {
                "labName": "THEORY OF MACHINE LAB",
                "category": "mechanical",
                "productName": "DIT508 - VIBRATION LAB (SET OF 11 EXPERIMENT)",
                "desc": "The VIBLAB is designed to help in conducting various experiments to illustrate and verify the principles and relations involved in the study of vibrations. This apparatus enables a comprehensive range of Vibration Experiments to be conducted on single basic framework.The frame is robustly constructed from channel section.The experiments are specially designed for quick and easy assembly on to the framework using a minimum amount of common engineering tools.To reduce changeover time on tube, more advanced free and forced vibration experiments, large knurled knobs are used to clamp components on the frame and many components are common to several experiments. All of the referenced groups of experiments are available separately, making it possible to procure them individually & if required, to build up a complete set over a period of time. \nSpecification\n1.	Wide range of experiments.\n2.	Forced and Free Vibrations.\n3.	Damped and undamped vibrations,\n4.	Arrangements for variation of damping.\n5.	Sturdy storage cabinet.\n6.	Experiments easily assembled.\n7.	Covers experiments for undergraduate studies.\n8.	Scope for student projects \nServices Required\n*	230 V, A.C. stabilized supply along with earthing connection.\n*	Bench area 0.5m x 0.5m x 0.5m height.\n*	Tachometer to measure the jumping speed, (can be supplied extra) A technical manual accompanies the unit.\nList of Experiments\n1.	Pendulum Experiments:\n*	Simple Pendulum.\n*	Compound Pendulum.\n*	Bi-filler Suspension.\n2. Longitudinal Vibration Experiment :\n*	Verification of Dukerleys Rule.\n*Forced rotor with viscous damping along with frictional HP Motor Strip chart recorder & control unit.\n3.	Torsional Vibration Experiment :\n*	Single Rotor System.\n*	Two Rotor System.\n*	Single Rotor with viscous darnping.\n4.	Damped Vibration Experiment :\n*	Verification of Dukerleys Rule\n*	Forced rotor with viscous damping along with frictional HP Motor Strip chart recorder & control unit.",

                "shortDesc": "The VIBLAB is designed to help in conducting various experiments to illustrate and verify the principles and relations involved in the study of vibrations.",
                "images": [
                    {"url": "public/image/Dit508.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "THERMODYNAMICS LAB",
                "category": "mechanical",
                "productName": "DITL723 - SINGLE STAGE AIR COMPRESSOR TEST RIG",
                "shortDesc": "The test rig comprises of a Single stage air compressor fitted with an air tank with orifice, pressure gauges, and an energy meter to measure ",
                "desc": "The test rig comprises of a Single stage air compressor fitted with an air tank with orifice, pressure gauges, and an energy meter to measure the input & a Temperature indicator measures the temperatures at various points.The compressor is mounted on air receiver along with the motor, and is provided with air relief valve (safety) and a pressure switch.The unit determines volumetric efficiency and isothermal efficiency at various discharge pressures \nSpecification \n1.	Air compressor - Single cylinder, Single stage type driven by a 2 hp.Three phase motor mounted on air receiver \nprovided with delivery valve. \n2.	Air tank and orifice with water manometer for air intake measurement \n3.	Pressure gauge to measure the discharge pressure. \n4.	Digital temperature indicator \n5.	Energy meter to measure input power. A technical manual accompanies the unit. \nService Required \n1.	Floor space of 2.5 X 1.5m. \n2.	440 V, 15A, 3ph. AC supply with neutral and earthing connection. \n3.	A hand tachometer",
                "images": [
                    {"url": "public/image/Ditl723.png", "caption": "Fornt View"}, 
                    {"url": "public/image/Ditl723a.png", "caption": "Side View"},
                ],
                "featured": "true"
            },
             {
                "labName": "THERMODYNAMICS LAB",
                "category": "mechanical",
                "productName": "DITL724 - TWO STAGE AIR COMPRESSOR TEST RIG",
                "shortDesc": "The test rig comprises of a two-stage air compressor fitted with an air tank with orifice, pressure gauges. an energy meter to measure",
                "desc": "The test rig comprises of a two-stage air compressor fitted with an air tank with orifice, pressure gauges. an energy meter to measure the input & a temperature indicator to measure the temperatures at various points. The compressor is mounted on air receiver along with the motor. and is provided with air relief valve (safety) and a pressure switch,The unit determines volumetric efficiency and isothermal efficiency at various discharge pressures. \nSpecification \n1.	Air compressor - Single cylinder, Single stage type driven by a 2 hp.Three phase motor mounted on air receiver provided with delivery valve.\n2. Air tank and orifice with water manometer for air intake measurement \n3.	Pressure gauge to measure the discharge pressure. \n4.	Digital temperature indicator \n5.	Energy meter to measure input power. A technical manual accompanies the unit. \nService Required \n1.	Floor space of 2.5 X 1.5m. \n2.	440 V, 15A, 3ph. AC supply with neutral and earthing connection. \n3.	A hand tachometer.",
                "images": [
                    {"url": "public/image/Ditl724.png", "caption": ""}, 
                ],
                "featured": "false"
            },
            {
                "labName": "THERMODYNAMICS LAB",
                "category": "mechanical",
                "productName": "DITL725 - ROTARY AIR COMPRESSOR TEST RIG",
                "shortDesc": "The Apparatus consists of a rotary vane compressor driven by an electric motor; Air intake is measured by an orifice meter and manometer, Discharge pressure is measured by a pressure gauge",
                "desc": "The Apparatus consists of a rotary vane compressor driven by an electric motor; Air intake is measured by an orifice meter and manometer, Discharge pressure is measured by a pressure gauge. Power input of the compressor measured by an Energy meter.Thus the students can determine volumetric efficiency, power consumption and free air discharge of compressor.\n Specification\n 1.	Vane compressor - Rotary compressor, driven by 3 HP motor.\n 2.	Calibrated orifice meter with water manometer to measure air intake,\n 3.	Energy meter to measure input of the meter.\n 4.	Pressure gauge to measure discharge pressure.\n 4.	Control valve at delivery side.\n 5.	Stop clock.\n A technical manual accompanies the unit.\n Service Required\n 1.	Floor space of approx. 1.5 x 1.5 m x 1.5m height.\n 2.	440 V, 16A, 3ph. AC supply.\n 3.	A hand tachometer.",
                "images": [
                ],
                "featured": "false"
            },
            {
                "labName": "THERMODYNAMICS LAB",
                "category": "mechanical",
                "productName": "DITL726 - CENTRIFUGAL BLOWER TEST RIG",
                "shortDesc": "The apparatus consists of a spiral casing, which houses an impeller. Impeller is driven by a variable speed D.C. motor.",
                "desc": "The apparatus consists of a spiral casing, which houses an impeller. Impeller is driven by a variable speed D.C. motor.Three, interchangeable impellers, viz. Radial forward and Backward curved vanes are provided with the unit. Digital indicators are provided for speed of impeller A venture provided measures the discharge.Thus students can evaluate the performance of different impellers at various speeds.\n Specification\n 1.	Blower - Spiral casing with three interchangeable impellers viz. forward, backward and radial vanes.\n 2.Drive Motor-I HP DC motor. 3000 RPM with Dimmer control to vary the speed from 300 to 3000 RPM.\n 3.	Digital Speed indicator for speed measurement,\n 4.	Ventura with water manometer to measure air flow.\n 5.	Water manometer to measure discharge pressure.\n 6.	Discharge pipe with flow control valve. A technical manual accompanies the unit.\n Service Required\n 1.	Floor space of about 2m X 1.5m X 1.5m height.\n 2.	230 V. 5A., 50Hz, AC Supply.",
                "images": [
                    {"url": "public/image/Ditl726.png", "caption": ""}, 
                ],
                "featured": "false"
            },
            {
                "labName": "THERMODYNAMICS LAB",
                "category": "mechanical",
                "productName": "DITL727 - WATER COOLING TOWER APPARATUS",
                "shortDesc": "The apparatus consists of a forced draught, counter flow type-cooling tower. A blower supplies cooling air. ",
                "desc": "The apparatus consists of a forced draught, counter flow type-cooling tower. A blower supplies cooling air. Air enters the tower at the bottom. Hot water is, obtained from a geyser. Hot water is sprayed over the mesh packing through the nozzles and it flows downwards. Evaporative cooling of water occurs due to the current of air and water gets cooled.Thus student can Study the operation of cooling tower and calculate the energy balance. \n Specification \n 1.	Cooling tower, fabricated of M.S. Sheets. 200 X 200 mm. cross section, 1.2m, height with Perspex front,Wire mesh packing is provided in the tower, \n 2.	Geyser - 3 KW Capacity to provided hot water. \n 3.	Centrifugal blower, 1 HP capacity to force air through the tower. \n 4.	Multichannel Digital Temperature indicator to measure temperature at various points. \n 5.	Rotameter to measure inlet water flow. \n 6.	Measuring tank to measure outlet water flow. \n 7.	Calibrated orifice and water manometer to measure airflow, \n 8.	Arrangement to measure dry and wet bulb temperatures of air at 5 intermediate stations. A technical manual accompanies the unit. \n Service Required \n 1.	440V, 32A, AC supply with neutral and earthing connection. \n 2.	Floor space of about 2m. X 1.5m. \n 3.	Water flow of 10 Ht./min. at constant head",
                "images": [
                    {"url": "public/image/Ditl727.png", "caption": ""}, 
                ],
                "featured": "false"
            },
            {
                "labName": "THERMODYNAMICS LAB",
                "category": "mechanical",
                "productName": "DITL728 - STEAM POWER PLANT TRAINER",
                "shortDesc": "Steam power plant working unit - This unit helps the students to Understand the complete system of a thermal power plat",
                "desc": "Steam power plant working unit - This unit helps the students to Understand the complete system of a thermal power plat. \n1.	Heat Energy Converts Water Into Steam \n2.	Steam Pressure When Moves A Engine or Turbine Produces Mechanical Energy \n3.	Finally Mechanical Energy Is Converted Into Electricity Through Alternator \nParts Details of Boiler \nDiameter of Boiler - 400 mm \nLength of Boiler - 600 mm \nHeater 2 Pcs. - 3 KW (Each)",
                "images": [
                    {"url": "public/image/Ditl728.png", "caption": ""}, 
                     {"url": "public/image/Ditl728a.png", "caption": ""},
                      {"url": "public/image/Ditl728b.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "THEORY OF MACHINE LAB",
                "category": "mechanical",
                "productName": "DIT509 - CORIOLLIS COMPONENT OF ACCELERATION",
                "desc": "This set up is designed to study coriollis component of Acceleration of a slider crank Mechanism.The apparatus uses hydraulic analogy to represent the rotating slider. It consists of a rotating block with two arms in opposite direction. These tubes can be rotated at various speeds by using a swinging field motor, which also acts as a dynamometer to measure torque applied to rotating tubes. A Perspex window on top cover helps to visualize the process. Rotameter is used to measure water flow rate through tubes.Water is circulated by small mono block pump. Specification \n1.	Main Tank with fiberglass lining,\n 2.	Rotating Arms 9/6 mm dia, 300 mm long. \n3.	Motor - Swinging field, D.C., 0.5 HP.\n 4.	Rotameter \n5.	Monoblock Pump Range of Experiment\n6.	Control Panel comprising of - (i)	Speed Control Unit, (ii)	Speed Indicator. (iii)	Necessary switches.\n 7.	Rigid support frame. \n Range of Experiment \nCoriollis Component Of Acceleration can be determined at various speeds of rotation and water flow rates. \nServices Required \n*	A.C. Single Phase .230 V. stabilized supply. \n*	Floor Space - l.5 m X I.5 m. ",

                "shortDesc": "This set up is designed to study coriollis component of Acceleration of a slider crank Mechanism.The apparatus uses hydraulic analogy to represent the rotating slider",
                "images": [
                ],
                "featured": "false"
            },
            {
                "labName": "THEORY OF MACHINE LAB",
                "category": "mechanical",
                "productName": "DIT510 - SLIP & CREEP MEASUREMENT APPARATUS",
                "desc": "TThe apparatus consists of a variable speed D.C. Motor, Driving pulley and Driven pulley of equal diameter.The pulleys are mounted on input shaft (Motor shaft) and output shaft.The driven pulley can slide on the base with bearing block to change initial tension in belt. Brake drum mounted on output shaft helps to measure power output,The motor speed is varied by dimmerstat. A two channel RPM Indicator is provided to measure speeds of driven and driving pullies respectively. \nSpecification \n1.	D.C. Motor- 1 HP, 1500 RPM, variable speed. \n2.	Driving & Driven pullies of equal diameters. \n3.	Brake drum along with spring balance. \n4.	Fiat Belt of fixed length of following materials - \n* Canvas Belt * Fabric Belt * Rubber Belt \n5.	Belt tightening arrangement.\n6.Speed Controller unit. \n 7.	Two Channel digital RPM Indicator. \n 8.	Stroboscope. \n Experimentation \n 1.	To measure co-efficient of friction between pulley material and different belt materials. \n 2.	To measure power transmitted with varied belt tensions and plotting graph of (Tl - T 2).Tension Characteristics, \n 3.	To measure percentage slip at fixed belt tension by varying load on brake drum and plot graph of (Tl - T 2) Vs -percentage slip i.e. Slip Characteristics. Finding a creep zone from graph, \n 4.	To measure belt slip speed and observe the limiting value float at constant speed when the slip just starts. \n Services Required \n 1.	230 V.A.C. Stabilized power supply \n 2.	Space 1.5m x 1.5 m. \n  ",

                "shortDesc": "The apparatus consists of a variable speed D.C. Motor, Driving pulley and Driven pulley of equal diameter.The pulleys are mounted on input shaft ",
                "images": [
                    {"url": "public/image/Dit510.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "THEORY OF MACHINE LAB",
                "category": "mechanical",
                "productName": "DIT511 - JOURNAL BEARING APPARATUS",
                "desc": "The apparatus consists of a plain steel shaft encased in a bearing and directly driven by a small electric motor.The bearing is freely supported on the shaft and sealed at motor end.The motor speed is precisely controlled by control unit and sealed at motor end.The motor speed is precisely controlled by control unit and can be run in both directions. The bearing contains twelve equispaced pressure tapping around circumference and four along the axis. All are connected by light flexible plastic tube to the manometer so that the pressure head of all sixteen point can be observed at a time.The bearing can be loaded by attaching weight to the arm supported beneath it.\n Specification\n 1.	Journal : 50 mm. dia. (nominal)\n 2.	Bearing : 55 mm. dia.\n 3.	Weights : 4 adjustable weights\n 4.	Motor : D.C. shunt Motor, 3.000 RPM.\n 5.	Control panel : For speed control of Motor\n 6.	Manometer panel : 16 tube Manometer\n 7 Oil recommended : SAE 10\n Experiments\n *	Observation of the pressure profile at various conditions of load and speed.\n *	Plotting the Cartesian and polar pressure curves.\n *	Plotting the theoretical Summer field curves.\n Service Required\n *	A.C Single Phase, 230v. supply with ear thing.\n *	Floor Space 1.5m X 1.5m X 4m Height",

                "shortDesc": "The apparatus consists of a plain steel shaft encased in a bearing and directly driven by a small electric motor.The bearing is freely supported on the shaft and sealed at motor end.",
                "images": [
                    {"url": "public/image/Dit511.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "THEORY OF MACHINE LAB",
                "category": "mechanical",
                "productName": "DIT512 - DEAD WEIGHT PRESSURE GAUGE TESTER",
                "desc": "RANGE 0.5 To 25 kg/cm2\n It is used for calibration of Pressure Gauges. Relationship between pressure acting on the known area of a vertically free floating piston producing a force balanced by known dead weight is made use of in the Dead Weight Pressure Gauge Tester.\n The main components of a Dead Weight Pressure Gauge Tester are\n 1. Screw Pump to generate pressure in the circuit, of adequate capacity and operated by turning the spoked handle. Permits easy and accurate setting of pressure.\n 2.	Free Piston Assembly of special steel, hardened, tempered, ground and lapped to accurate Size and very fine surface finish to provide true floating action.\n 3. Set of Weights directly marked in convenient values of pressure and easily stacked on the carrier weight. Available in either/and kgf/cm2, bar Cbf/in2units. Other units on request, Storage box provided.",

                "shortDesc": "It is used for calibration of Pressure Gauges. Relationship between pressure acting on the known area of a vertically ",
                "images": [
                    {"url": "public/image/Dit512.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "THEORY OF MACHINE LAB",
                "category": "mechanical",
                "productName": "DIT513 - EPICYCLIC GEAR TRAIN HOLDING TORQUE APPARATUS",
                "desc": "It is a motorized unit consisting of SUN gear mounted on input shaft.These planet gears are mounted on a common arm to which output shaft is fitted. Loading arrangement is provided for loading the system and to measure Holding Torque.\n Specification\n 1.	External type Epicyclic Gear Train:\n *	Bearing blocks for input & output shafts.\n *	A gear train with Holding drum and handle.\n 2.	Internal Type Epicyclic Gear Train:\n *	A compact Gear Train.\n *	Variable speed D.C. Motor\n *	Rope brake arrangement to measure output torque and holding torque.\n 3.	Control Panel comprising of :\n *	Digital Ammeter and Voltmeter.\n *	RPM Indicator.\n *	Speed Controller.\n Experimentation\n 1.	To measure epicyclical gear ratio between Input shaft and Output shaft.\n 2.	To measure epicyclical gear ratio between Input shaft and holding drum.\n 3.	To measure Input torque, Holding torque and output torque.\n Services Required\n *	Floor Space - about 1.5m x 2m.\n *	230 V AC stabilized power supply.",

                "shortDesc": "It is a motorized unit consisting of SUN gear mounted on input shaft.These planet gears are mounted on a common arm to which output shaft is fitted. Loading arrangement is provided for loading the system and to measure Holding Torque",
                "images": [
                ],
                "featured": "false"
            },
            {
                "labName": "THEORY OF MACHINE LAB",
                "category": "mechanical",
                "productName": "DIT514 - TOOL DYNAMOMETERS",
                "desc": "A. MILLING TOOL\n This is a simple and easy to understand set up introduce by sharp techno systems to study the behavior of cutting forces during milling operation in three directions.With this unit students can evaluate cutting depth, speed and feed.The unit works on standard method of octagonal ring with strain gauges. It is in to part one mechanical rings sandwiched between two M.S. plate with strain gauges fixed on it.This set of octagonal rings transmits the relevant data to the force indicator during milling operation.\nFeatures\n 1.	Rigid construction & Compact Unit.\n 2.	Assessment of cutting forces by giving due consideration to various parameters like depth of cut, material, cut, material, speed and feed.\n 3.	Easy in handling & Digital force indicators to measure three forces simultaneously.\n Specifications\n 1.	Mechanical sencing unit with set of octagonal rings and strain gauges.\n 2.	Three channel digital force indicator with balancing potentiometers and polycarbonate front plate.\n 3.	Range of force measurement in coordinate direction 0 to 500 kg.\n 4.	Over all size of mechanical unit• 300 x 300 mm.\n Service Required\n 1.	Necessary Milling Machine with automatic feed arrangement and tooling\n 2.	230 volts. single phase, 50 Hz stabilized power supply.",

                "shortDesc": "It is a motorized unit consisting of SUN gear mounted on input shaft.These planet gears are mounted on a common arm to which output shaft is fitted. Loading arrangement is provided for loading the system and to measure Holding Torque",
                "images": [
                    {"url": "public/image/Dit514.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "THEORY OF MACHINE LAB",
                "category": "mechanical",
                "productName": "DIT515 - B. GRINDER TOOL",
                "desc": "This a simple set up to study the various forces resolved during grinding operation, designed by sharp techno system for demonstration purpose for the students undergoing tool designing study.This unit works on octagonal ring method using strain gauge as a sensor. A two channel digital force indicator facilitates to measure both forces simultaneously.\n 1.	Rigid construction & Compact Unit.\n 2.	Assessment of cutting forces by giving due consideration to various parameters like depth of cut, material, cut, material, speed and feed.\n 3.	Easy in handling & Digital force indicators to measure three forces simultaneously.\n Specifications\n 1.	Mechanical sencing unit with set of octagonal rings and strain gauges.\n 2.	Three channel digital force indicator with balancing potentiometers and polycarbonate front plate.\n 3.	Range of force measurement in coordinate direction 0 to 200 kg.\n 4.	Over all size of mechanical unit - 300 x 300 mm.\n Service Required\n 1.	Necessary surface grinding machine.\n 2.	230 volts. single phase, 50 Hz stabilized power supply.",

                "shortDesc": "This a simple set up to study the various forces resolved during grinding operation, designed by sharp techno system for demonstration ",
                "images": [
                    {"url": "public/image/Dit515.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "THEORY OF MACHINE LAB",
                "category": "mechanical",
                "productName": "DIT516 - C. LATHE TOOL",
                "desc": "This is a strain gauge type two component lathe tool dynamometer designed to measure vertical and horizontal forces on the while orthogonal cutting process.The unit is in two parts one is mechanical sensing unit or tool holder, which can be mounted on the top of the Ross slide after removing swivel base and compound slide of a lathe and digital force indicator.With this Dynamometer student can study the change in these forces by varying Speed, Cut and Feed.\n Features\n 1.	Rigid in construction.\n 2.	Sensitive transuding and amplifying system for accuracy in force measurement.\n 3.	Compact Digital force indicator.\n 4.	Use of cutting fluid during operation is possible.\n Supply of People\n 1.	Mechanical sensing unit or Tool Holder with string gauges.With H.S.S. tool of ½” size.\n 2.	Control panel housing digital force indicator to measure two forces simultaneously, balancing potentiometers, connoting cable.\n 3.	Necessary switches, fuses and polycarbonate front plate. Range 0 to 500 Kg. Centre Height, P.C.D. of clamping bolt size, clamping Bolt size.Three component lathe tool dynometer is also available.",

                "shortDesc": "This is a strain gauge type two component lathe tool dynamometer designed to measure vertical and horizontal forces on the while orthogonal cutting process.",
                "images": [
                    {"url": "public/image/Dit516.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "THEORY OF MACHINE LAB",
                "category": "mechanical",
                "productName": "DIT517 - B. DRILLING TOOL",
                "desc": "This is an armed wheel type strain gauge drill tool dynamometer designed to measure thrust and torque during drilling operation.This Dynamometer is suitable for drilling a hole up to 25mm size in mild steel.With this Dynamometer students can study the change in these forces by varying speed, cut and feed\n Features\n 1.	Rigid in construction & Sensitive transuding and amplifying system for accuracy in force measurement.\n 2.	Compact two channel digital force indicator.\n 3.	Use of cutting fluid during operation is possible.\n Supply of People\n 1.	Mechanical sensing unit and work piece holder with strain gauges.\n 2.	Control panel housing digital force indicator to measure both forces simultaneously, balancing potentiometer,\n connoting cables.\n 3.	Necessary switches, fuses and screen printed front plate.\n 4.	The dynamometer is calibrated at factory with help of proving ring and readings are directly in the from of kg.",

                "shortDesc": "This is an armed wheel type strain gauge drill tool dynamometer designed to measure thrust and torque during drilling operation",
                "images": [
                    {"url": "public/image/Dits517.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "THERMODYNAMICS LAB",
                "category": "mechanical",
                "productName": "DITL729 - SEPARATING & THROTTLING CALORIMETER WITH BOILER",
                "shortDesc": "AIM : To find out dryness fraction of steam by combined separating and throttling calorimeter.",
                "desc": "AIM : To find out dryness fraction of steam by combined separating and throttling calorimeter. Product Details\n The steam passing out from separating calorimeter may still contain some water vapour, in it in other words it may not be absolutely dry, again in a throttling calorimeter steam after passing through the throttle valve must be superheated or at least dry saturated . this limits the extent of dryness fraction that can be reliably measured, depend up on the pressure of steam in the main steam pipe . if a sample of steam, which may be still wet after passing through the throttle valve i.e it will not be superheated . thus under this condition the throttling calorimeter fails to enable us in determining the value of dryness fraction of steam . to overcome this difficulties we make use of separating and throttling calorimeter . first the steam is passed through separating calorimeter where it looses most of it's moisture and becomes comparatively drier. it is than passed through the throttling calorimeter where super heating takes place with out change of total heat . the temperature and pressure of steam after throttling are measured by using a thermometer and manometer respectively.\n Description\n The set up consist of a separating and throttling calorimeter a steam generator is provided at the base of the apparatus a thermostat knob is provided at the front of apparatus to control the temperature inside the steam generator steam from steam generator is passed from separating calorimeter where most of the water particle get separated from steam and then passed to throttling calorimeter where steam get superheated after that superheated steam passed through heat exchanger to condense the steam\nSeparating Calorimeter\n It consist of two concentric chamber. the inner chamber ,and the outer chamber. which communicates with each other through an opening at the top. As the steam discharge through the metal baskets, which has a large number of holes the water particle due to there heavier momentum get separated from the steam and collected in the chamber. The comparatively dry steam in the inner chamber moves up and then down passing through the annular space between the two chambers and enters the throttling calorimeter\nThrottling Calorimeter\nIt consist a narrow throat , pressure and temperature are measured by manometer and thermometer the steam after throttling process passed through the heat exchanger and condensate is collected \nServices Required\n*	Floor space of 2.5 X 1.5m\n*	440 V, 15A, 3ph. AC supply with neutral and earthing connection",
                "images": [
                    {"url": "public/image/Ditl729.png", "caption": ""}, 
                ],
                "featured": "false"
            },
             {
                "labName": "THERMODYNAMICS LAB",
                "category": "mechanical",
                "productName": "DITL730 - HYDRAULIC TRAINER CLASSIC",
                "shortDesc": "Salient Features\n We are manufacturing cylinders for industrial applications. Our cylinders can withstand pressure up to 160 Bar.\n Mobile and self-contained unit, only electrical connections are required.",
                "desc": "Salient Features \nWe are manufacturing cylinders for industrial applications. Our cylinders can withstand pressure up to 160 Bar.\n Mobile and self-contained unit, only electrical connections are required.\nSimplicity of operation and designed for amateur use.\n Two pressure relief valves are provided in the system. One is provided inside the tank to increase the safety.\n Hoses can withstand pressure of 188 Bar.\n Test Pressure : 80 Bar ; Operating Pressure : 40 Bar.\n Realistic Industrial circuits are demonstrated.\n Special Bell housing is provided to maintain the Run out between Pump and Motor below 0.020mm. \nSpecial fixtures used for pipe bending and ferrule fitting arrangement,\n Specially designed front mounting plate,\n System is flushed with very high velocity (4 times the working pressure) by separate oil which maintains class A cleanliness of system.\n Lowest pressure drop in the system to avoid overheating.\n Cylinder are manufactured from precision honed tubes, hardened ground, hard chrome plated piston rods and imported quality seals.\nList of Experiments \nStudy of pressure built up in the system & setting relief valve pressure \nStudy of 4/2 way dc valve \nStudy of 4/3 way dc valve. \nPressure adjustment Isetting of relief valve. \nThrottle valve pressure flow characteristics. \nControl of double acting cylinder with 4/3 way dc valve. \nControl of double acting cylinder with 4/2 way dc valve. \nSpeed control of double acting cylinder with 4/3 way dc valve. \nHydraulic motor operation with 4/2 way DC Valve, \nHydraulic motor operation with 4/3 way dc valve \nHydraulic motor operation with 4/3 way dc valve and flow control valve \nOperation of Single Acting Cylinder with 4/2 way Direction Control valve. \nOperation of Single Acting Cylinder with 4/3 way Direction Control valve. \nMeter-in speed control circuit. \nMeter out speed control circuit. \nBleed off speed control unit. \nStudy of pressure reducing valve. \nStudy of sequence valve and setting sequence valve pressure. \nSequencing of Hydraulic Cylinder and motor. \nStudy of Pressure Reducing Valve. \nStudy of pressure switch and its pressure settings. \nInching operation of double acting cylinder with 4/3 solenoid operated direction Control \nOperation of Two cylinders in series \nOperation of Two cylinders in Parallel \nAutomatic position control of Hydraulic cylinder continuous operation.",
                "images": [
                    {"url": "public/image/Ditl730.png", "caption": ""}, 
                ],
                "featured": "false"
            },
            {
                "labName": "THERMODYNAMICS LAB",
                "category": "mechanical",
                "productName": "DITL731 - HYDRAULIC TRAINER ELECTRO HYDRAULIC",
                "shortDesc": "List of Experiments\nStudy of pressure built up in the system.\n Positive displacement pumps characteristics. \nStudy of double acting cylinder.",
                "desc": "List of Experiments\nStudy of pressure built up in the system.\n Positive displacement pumps characteristics. \nStudy of double acting cylinder.\nStudy of 4/2 way dc valve.\n Study of 4/3 dc valve.\nPressure adjustment 'setting of relief valve. \nThrottle valve pressure flow characteristics.\n Characteristics of direct operated relief valve.\n Control of double acting cylinder with 4/3 way dc valve\nControl of double acting cylinder with 4/2 way dc valve\nHydraulic motor operation with 4/3 way dc valve\nHydraulic motor operation with 4/3 way dc valve and flow control valve\nStudy of cavitation & aeration phenomenon\nFlow characteristics of pressure compensated flow\ncontrol valve\nPressure- Flow characteristics of pressure compensated flow control valve\nMeter-in speed control circuit\nMeter out speed control circuit\nBleed off speed control unit\nStudy of pilot operated check valves\nOperation of double acting cylinder with pilot operated check valve\nStudy of pressure reducing valve\nStudy of sequence valve\nSequencing of two cylinders\nSequencing & speed control of cylinders\nRegenerative Circuit\nStudy of control balance circuit\nSequencing of two cylinders with reduced pressure for one of them\nRapid traverse & feed control circuit\nStudy of pressure switch & its pressure settings\nOperation of double acting cylinder with 4/3 solenoid operated dc valve.\nAutomatic return of double acting cylinder (using limit switch)\nAutomatic return of double acting cylinder(using pressure switch)\nSequencing of cylinder & motor using pressure switch\nOperation of double acting cylinder using latching ckt.\nStudy of proximity switch\nOperation of double acting cylinder using proximity switch\nSequencing of two cylinders using limit switch Rapid traverse & feed control circuits using proximity switch\nStudy of relay unit Study of timers\nSalient Features\n Software for simulation of Hydraulic circuits \nWe are manufacturing cylinders for industrial applications. Our\n cylinders can withstand pressure up to 160 Bar.\n Mobile and self-contained unit, only electrical connections are required.\n Simplicity of operation and designed for amateur use.\n Two pressure relief valves are provided in the system. One is provided inside the tank to increase the safety.\n Hoses can withstand pressure of 188 Bar.",
                "images": [
                    {"url": "public/image/Ditl731.png", "caption": ""}, 
                ],
                "featured": "false"
            },
            {
                "labName": "THERMODYNAMICS LAB",
                "category": "mechanical",
                "productName": "DITL732 - HYDRAULIC TRAINER ELECTRO HYDRAULIC",
                "shortDesc": "Salient Features\nTest Pressure : 80 Bar ; Operating Pressure : 40 Bar. \nRealistic Industrial circuits are demonstrated.\nSpecial Bell housing is provided to maintain the Run out between Pump and Motor below 0.020mm",
                "desc": "Salient Features \nTest Pressure : 80 Bar ; Operating Pressure : 40 Bar. \nRealistic Industrial circuits are demonstrated. \nSpecial Bell housing is provided to maintain the Run out between Pump and Motor below 0.020mm. \nSpecial fixtures used for pipe bending and ferrule fitting arrangement.\n Specially designed front mounting plate.\n System is flushed with very high velocity (4 times the working pressure) by separate oil which maintains class A cleanliness of system.\n Lowest pressure drop in the system to avoid overheating.\n Cylinder are manufactured from precision honed tubes, hardened ground, hard chrome plated piston rods an imported quality seals.",
                "images": [ 
                ],
                "featured": "false"
            },
            {
                "labName": "THERMODYNAMICS LAB",
                "category": "mechanical",
                "productName": "DITL733 - PNEUMATIC TRAINER-BASIC",
                "shortDesc": "Salient Features\nMobile self contained unit.\nSimplicity of operation and designed for immature use.\nIndustrial components and circuits are demonstrated in the circuit.",
                "desc": "List of Experiments\n Operation of a single acting cylinder\n Speed control of Single acting cylinder\n Operation of a single acting cylinder with and gate\n Operation of pneumatic motor\n Speed control of pneumatic motor\n Operation of D/A cylinder with 5/3 Way Lever operated DC Valve\n Speed control of D/A cylinder with flow control (Meter In)\n Speed control of D/A cylinder with flow control (Meter Out)\n Speed control of D/A cylinder with flow control in forward & return stroke\n Sequencing of motor & double acting cylinder\n Sequencing of D/A cylinder with single acting cylinder\n Operation of Single acting cylinder with 5/2 way Single Solenoid\n Operation of double acting Cylinder with 5/2 Way Single Solenoid \nSalient Features\n Mobile self contained unit.\n Simplicity of operation and designed for immature use.\n Industrial components and circuits are demonstrated in the circuit.\n Pneumatic valves of Shrader / Festo/ SMC or equivalent only.\n Performance Guarantee of two years for any manufacturing defect,\n Modular design with Fitment of component at any corner of trainer.\n Specially designed quick coupling.",
                "images": [
                    {"url": "public/image/Ditl733.png", "caption": ""}, 
                ],
                "featured": "false"
            },
             {
                "labName": "THERMODYNAMICS LAB",
                "category": "mechanical",
                "productName": "DITL734 - ELECTRO PNEUMATIC TRAINING",
                "shortDesc": "Salient Features\n Self combined mobile unit.\n Only electrical supply required.\n All the components are easily accessible",
                "desc": "List of Experiments \nIntroduction of Relay and contactor. \nIntroduction of Proximity Sensor, Capacitive & Photoelectric Sensor, Limit Switch. Introduction to Pressure Switch, Electrical Counter ON Timer & OFF Timer. \nOperation of single acting cylinder with single sol. valve and Single limit switch. Operation of double acting cylinder with single sol, valve and single limit switch. \nContinuous operation of double acting cylinder with single solenoid valve and two limit switches. Operation of double acting cylinder with single solenoid valve, and gate of electrical switches. \nOperation of double acting cylinder with single solenoid valve, or gate of electrical switches. Operation of double acting cylinder with single solenoid valve, NOR gate of electrical switches.\nOperation of double acting cylinder with single solenoid valve, NAND gate of electrical switches.\nOperation of double acting cylinder with double solenoid valve.\nSystem pressure will be maintained in specified pressure limit with pressure switch.\nOperation of double acting cylinder with single solenoid valve with ON time delay.\nOperation of double acting cylinder with single solenoid valve with OFF time delay,\nContinuous operation of double acting cylinder with specified no. of cycles using counter.\nSequencing of two cylinders. cycle is cylinder A Extends, cylinder B Extends, Both cylinder vetracts simultaneously. A + , B + , A-, B-\nSequencing of two cylinders. cycle is cylinder A Extends, cylinder B Extends, cylinder A retracts then cylinder B retracts. A + , B + , A-, B-\nSalient Features \nSelf combined mobile unit. \nOnly electrical supply required. \nAll the components are easily accessible. \nReal life components of reputed manufacturers provided. \nQuick connections possible due to special fittings/ pipes. \nTried and tested components and circuits, \nSpecially designed electrical control panel enabling students to develop their own electrical circuits. \nCompletely user friendly and highly interactive software provided with PC based Trainer. \nModular design with facilities to operate simple mechanism \nPneumatically operated models available as additional supply. \nTraining of Trainers offered at regular intervals. \nTwo years performance guarantee for any manufacturing defects.",
                "images": [
                    {"url": "public/image/Ditl734.png", "caption": ""}, 
                ],
                "featured": "false"
            },
            {
                "labName": "THERMODYNAMICS LAB",
                "category": "mechanical",
                "productName": "DITL735 - DIGITAL BOMB CALORIMETER",
                "shortDesc": "Bomb Calorimeter outfit provides a simple and inexpensive method for determination of heat of combustion of organic matter and the calorific ",
                "desc": "Bomb Calorimeter outfit provides a simple and inexpensive method for determination of heat of combustion of organic matter and the calorific value and sulphur content of solid and liquid fuel.The outfit supplied is complete for analysis as per the method recommended by British Standard Institution BS 1016, All parts of the outfit have been finished of petroleum and British Standard Institute.\n Supplied With\n Calorimeter Vessel with bomb support.Water jacket. Combined Lid for calorimeter vessel and water jacket, Stirrer, Connecting Leads. Connecting tube to connect bomb & pressure gauge, Connecting tube with fine adjustment valve. to connect pressure gauge, pressure gauge on stand, Spanner for oxygen tube connection, Ignition Wire, (2 meters) Nichrome, Cotton Real, stand for bomb lid. Hook for lifting bomb, stainless steel Crucible, Gelatine capsules, Gas release valve. Bomb firing unit,Vibrator,Timer. Benzonic acids. 'O' Ring Big, 'O' Ring Small, 'O' Ring for Stirrer Valve for Bomb,Valve Kay. Complete with Instruction manua",
                "images": [
                    {"url": "public/image/Ditl735.png", "caption": ""}, 
                ],
                "featured": "false"
            },
            {
                "labName": "THERMODYNAMICS LAB",
                "category": "mechanical",
                "productName": "DITL736 - OPEN WIND TUNNEL APPARATUS",
                "shortDesc": "A wind tunnel is the classic experiment system for aerodynamic flow experiments.The model being studied remains at rest while the flow medium is set in motion and thus, the desired flow around the model is generated.",
                "desc": "Technical Description\nA wind tunnel is the classic experiment system for aerodynamic flow experiments.The model being studied remains at rest while the flow medium is set in motion and thus, the desired flow around the model is generated.Open wind tunnel is used to demonstrate and measure the aerodynamic properties of various models. For this purpose, air is drawn in from the environment and accelerated.The air flows around a model, such as an aerofoil, in a measuring section.The air is then decelerated in a diffuser and pumped back into the open by a fan. The carefully designed nozzle contour and a flow straightener ensure a uniform velocity distribution with little turbulence in the closed measuring section.The flow cross section of the measuring section is square. The built-in axial fan with guide vane and a variable-speed drive is characterized by an energy-efficient operation at high efficiency. Air velocities of up to 28m/s can be reached in this open wind tunnel.The trainer is equipped with an electronic two - component force sensor. Lift and drag are detected and displayed digitally. The air velocity in the measuring section is displayed on the inclined tube manometer. The tube manometers is recommended for measuring the pressure curves in drag bodies. Extensive accessories allow a variety of experiments. for example lift measurements, pressure distributions, boundary layer analysis or visualization of streamlines.The well-structured instructional material sets out the fundamentals and provides a step-by-step guide through the experiments.\n Learning Objectives & Experiments\nDetermine drag and lift coefficients for different models\nPressure distribution when flowing around drag bodies Boundary layer analysis\nInvestigation of flutter\nWake measurement \nFeatures\nOpen wind tunnel for a variety of aerodynamic experiments\nHomogeneous flow through the flow straightener and special nozzle contour\nTransparent measuring section",
                "images": [
                    {"url": "public/image/Ditl736.png", "caption": ""}, 
                ],
                "featured": "false"
            },
            {
                "labName": "THERMODYNAMICS LAB",
                "category": "mechanical",
                "productName": "DITL737 - THIN CYLINDER APPARATUS",
                "shortDesc": "A heavy bench top unit for studying the stress and strain in a thin walled cylinder under internal pressure. A thin walled cylinder is mounted between two support blocks",
                "desc": "A heavy bench top unit for studying the stress and strain in a thin walled cylinder under internal pressure. A thin walled cylinder is mounted between two support blocks. Internal pistons and seals create oil sealing. A handwheel at one end of the apparatus enables the cylinder end conditions to be adjusted to either open or closed.The internal pressure is adjusted by means of a hydraulic hand pump on the apparatus. An analogue pressure gauge displays the internal pressure whilst a pressure transducer gives feedback to the Data Acquisition Interface and Software supplied. Strain gauges are arranged on the external	surface	of	the	cylinder	to	measure	the	radial	and circumferential surface strain. The strain gauges are at various angles.",
                "images": [
                    {"url": "public/image/Ditl737.png", "caption": ""}, 
                ],
                "featured": "false"
            },
            {
                "labName": "AUTOMOBILE & I.C. ENGINE LAB",
                "category": "mechanical",
                "productName": "(VII)	ELECTRICAL EQUIPMENT BOARDS OF AUTOMOBILE",
                "desc": "DIAL017 - Mock Layout of Car Wiring Conventional Type\nIt is an open type instructional apparatus.This unit is capable of operation when a standard battery is connected to the given terminals\nDIAL018 - Mock Layout of Car Wiring- Latest Type\nAll the components used in the apparatus are of modern car. The complete mock layout is beautifully divided into 5 sections as under\n(A)	Front Lighting Panel\n(B)	Dash Board Panel\n(C)	Ignition System\n(D)	Rear Lighting Panel\n(E)	Motorised Charging System\nWith the help of this mock layout system its becomes very easy for the students to understand the actual working of electrical system of a modern car\nElectronic Ignition System of an Automobile\nDIAL019 The open demonstration unit is complete on board with original parts. ignition switch, ignition coil, electronic distributor (motor driven), four plugs necessary connections and power supply.",
                "shortDesc": "It is an open type instructional apparatus.This unit is capable of operation when a standard battery is connected to the given terminals",
                "images": [
                    {"url": "public/image/Dial017.png", "caption": "DIAL017"},
                    {"url": "public/image/Dial017a.png", "caption": "DIAL017A"},
                     {"url": "public/image/Dial019.png", "caption": "DIAL019"},
                ],
                "featured": "false"
            },
            {
                "labName": "AUTOMOBILE & I.C. ENGINE LAB",
                "category": "mechanical",
                "productName": "(VIII)	FUEL SUPPLY SYSTEMS OF AUTOMOBILE",
                "desc": "DIAL020 Coil Ignition System of an Automobile\nThe open demonstration unit is complete on board with original parts.\nFuel Supply System of a Petrol Engine Carburetor Type\nDIAL021 A - Actual Cut Section\n This model consist of petrol tank, mechanical fuel pump, fuel filter & Carburetor. Complete on 60 x 30 cm base with sectionised parts.\nFuel Supply System of a Diesel Engine\nDIAL021 B - Actual Cut Section\nThis is a working model with original parts. consisting of diesel fuel tank, fuel filter, injection pump and fuel injector. Complete on board.\nDIAL022 - Diesel Fuel Pump - Actual Cut Section\n The working of diesel fuel pump is shown with the help of actual parts assembled on iron base. All the necessary parts of diesel fuel pump are shown in actual working form.This model helps the student to understand the working of the diesel fuel pump very easily. It is specially made dissectible for demonstration purposes",
                "shortDesc": "The open demonstration unit is complete on board with original parts.",
                "images": [
                    {"url": "public/image/Dial020.png", "caption": "DIAL020"},
                    {"url": "public/image/Dial021a.png", "caption": "DIAL021A"},
                    {"url": "public/image/Dial021b.png", "caption": "DIAL021B"},
                    {"url": "public/image/Dial022a.png", "caption": "DIAL022A (A)	Inline Type"},
                    {"url": "public/image/Dial022b.png", "caption": "DIAL022B (B)	Rotary Type"},
                ],
                "featured": "false"
            },
             {
                "labName": "STRUCTURAL MECHANICS LAB",
                "category": "mechanical",
                "productName": "DISM300 APPARATUS FOR VERIFICATION OF CLARKE'S MAXWELL RECIPROCAL THEOREM",
                "desc": "Apparatus consist of a mild steel beam 100cm long and 1.25cm x 4mm in cross section with graduations at every 10cm along the length. It should be supported on two knife edge supports 70cm apart with a 30cm overhang on one side. Reciprocal theorem can be verified by direct measurements of the deflections of various points with the help of a dial gauge due to a load placed at the reciprocal points. A dial gauge with 25mm travel (with a magnetic base) will be supplied with the apparatus. Apparatus will be supplied complete with a supporting stand and a set of weights.\n Experimental Capabilities\n * To verify Clerk's Maxwell reciprocal theorem by means of a mild steel beam",
                "shortDesc": "Apparatus consist of a mild steel beam 100cm long and 1.25cm x 4mm in cross section with graduations at every 10cm along the length",
                "images": [
                    {"url": "public/image/Dism300.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "STRUCTURAL MECHANICS LAB",
                "category": "mechanical",
                "productName": "DISM301 - BEHAVIOUR OF COLUMN AND STRUTS APPARATUS",
                "desc": "Apparatus consist of four spring steel columns which are put along a vertical wooden board.These four columns have different end conditions as below: I . Both ends pinned\n2.	Both ends fixed\n3.	One end pinned and other fixed\n4.	One end fixed and other end free\nApparatus will be supplied complete with a supporting stand and a set of weights. ",
                "shortDesc": "Apparatus consist of four spring steel columns which are put along a vertical wooden board.",
                "images": [
                    {"url": "public/image/Dism301.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "STRUCTURAL MECHANICS LAB",
                "category": "mechanical",
                "productName": "DISM302 - CURVED MEMBER APPARATUS",
                "desc": "Apparatus consists of a steel bar which is used to make the different curved members Viz. circle, semicircle with straight arm. a quadrant of a circle and quadrant of a circle with straight arm.The bottom ends of the members are fixed to the base. Under the application of load at free end, its horizontal and vertical deflection can be measured with the help of dial gauges. A dial gauge with 25mm travel (with a magnetic base) is supplied with the apparatus. Apparatus will be supplied complete with a supporting stand and a set of weights",
                "shortDesc": "Apparatus consists of a steel bar which is used to make the different curved members Viz. circle, semicircle with straight arm.",
                "images": [
                    {"url": "public/image/Dism302.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "STRUCTURAL MECHANICS LAB",
                "category": "mechanical",
                "productName": "DISM303 - ELASTICALLY COUPLED BEAM APPARATUS",
                "desc": "rods are tied to a vertical wooden board while central suspension rod may be tied to the centre of another elastic beam supported at two outer ends only. Apparatus to be supplied should be complete with a supporting stand and a set of weights.",
                "shortDesc": "rods are tied to a vertical wooden board while central suspension rod may be tied to the centre of another elastic beam supported at two outer ends only.",
                "images": [
                    {"url": "public/image/Dism303.jpg", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "STRUCTURAL MECHANICS LAB",
                "category": "mechanical",
                "productName": "DISM304 - DEFLECTION OF BEAM APPARATUS",
                "desc": "The bench mounted apparatus has a steel base with support at ends.The supports can be fitted with knife edges or clamp plates. A steel beam and two load hangers are supplied together with two dial gauges for measuring beam deflections and slopes. This equipment is part of a range designed to both, demonstrate and experimentally confirm basic engineering principles. Great care has been given to each item so as to provide wide experimental scope without unduly complicating or compromising the design. Each piece of apparatus is self- contained and compact. Setting up time is minimal, and all measurements are made with the simplest possible instrumentation, so that the student involvement is purely with the engineering principles being taught. A complete instruction manual is provided describing the apparatus. its application, experimental procedure and typical test results. ",
                "shortDesc": "The bench mounted apparatus has a steel base with support at ends.The supports can be fitted with knife edges or clamp plates.",
                "images": [
                    {"url": "public/image/Dism304.png", "caption": ""},
                    {"url": "public/image/Dism304a.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "STRUCTURAL MECHANICS LAB",
                "category": "mechanical",
                "productName": "DISM305 - ELASTIC PROPERTIES OF DEFLECTED BEAM APPARATUS",
                "desc": "Apparatus consists of a mild steel beam 2.5cm x 3mm in cross section and 100cm long. pinned to two supports 70cm apart situated symmetrically. One of the ends can be fixed or given a known slope by applying a known moment at the end with the help of suspended loads. At the other end also a known moment can be applied. Vertical loads can be applied at various points along the span of the beam. A dial gauge with 25mm travel (with a magnetic base) may be supplied with the apparatus. Apparatus to be supplied should be complete with a supporting stand and a set of weights ",
                "shortDesc": "Apparatus consists of a mild steel beam 2.5cm x 3mm in cross section and 100cm long. pinned to two supports 70cm apart situated symmetrically.",
                "images": [
                    {"url": "public/image/Dism305.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "STRUCTURAL MECHANICS LAB",
                "category": "mechanical",
                "productName": "DISM306 - THREE HINGED ARCH APPARATUS",
                "desc": "The mild steel model has a span of 100cm and rise 25cm, with hinges at supports and crown. One of the ends rests on rollers. Along the horizontal span of the arch various points are marked at equidistant for the application of load.This being a statically determinate structure, the horizontal thrust developed under the action of any load system can be theoretically calculated and will also be measured directly by neutralizing the outward movement of the roller end. A dial gauge with 25mm travel (with magnetic base) will be supplied with the apparatus. Apparatus will be supplied complete with a supporting stand and a set of weights",
                "shortDesc": "The mild steel model has a span of 100cm and rise 25cm, with hinges at supports and crown. One of the ends rests on rollers. Along the horizontal span of the arch various points are marked at equidistant for the application of load.",
                "images": [
                    {"url": "public/image/Dism306.jpg", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "STRUCTURAL MECHANICS LAB",
                "category": "mechanical",
                "productName": "DISM307 - SUSPENSION BRIDGE APPARATUS",
                "desc": "Apparatus Consists of two mild steel cables 0.5cm diameter in cross section and 150cm long, pinned to two supports 90cm apart situated symmetrically. One of the ends can be converted to a roller by applying a known load at the end with the help of suspended pulley system.Vertical loads can be applied at various points along the span of the beam. A dial gauge with 25mm travel (with a magnetic base) will be supplied with the apparatus. Apparatus will be supplied complete with a supporting stand and a set of weights.",
                "shortDesc": "pparatus Consists of two mild steel cables 0.5cm diameter in cross section and 150cm long, pinned to two supports 90cm apart situated symmetrically.",
                "images": [
                    {"url": "public/image/Dism307.jpg", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "STRUCTURAL MECHANICS LAB",
                "category": "mechanical",
                "productName": "DISM308 - SHEAR CENTER APPARATUS",
                "desc": "Apparatus consists of sturdy base frame and Channel. Equal angle, Semicircle and Z-Section are supplied with apparatus. Standard length of each of the four sections in M. S. is supplied. Each is provided with end clamp for fixing to the rigid bracket. A special load hanger is provided so as to change the load position SO that with the help of two dial-gauges, the vertical plane of Shear-centre for the particular section can be determined.\nRange of Experiments\nDetermination of the vertical plane of shear center for different cross sections commonly used for structures.",
                "shortDesc": "Apparatus consists of sturdy base frame and Channel. Equal angle, Semicircle and Z-Section are supplied with apparatus. Standard length of each of the four sections in M. S. is supplied.",
                "images": [
                ],
                "featured": "false"
            },
            {
                "labName": "STRUCTURAL MECHANICS LAB",
                "category": "mechanical",
                "productName": "DISM310 - REDUNDANT JOINT APPARATUS",
                "desc": "Apparatus consists Of three suspension members (spring balances) of different stiffness which are jointed at a point to form the redundant joint.The upper end of the suspension members being tied in a position to a vertical wooden board. Arrangement is provided to apply a vertical load at the joint and to measure its horizontal and vertical displacement on a paper and also elongations and forces in the suspension members by the help of dial gauges.Two dial gauges with 25mm travel (with magnetic bases) are supplied with the apparatus. Apparatus will be supplied complete with a supporting stand and a set of weights.",
                "shortDesc": "Apparatus consists Of three suspension members (spring balances) of different stiffness which are jointed at a point to form the redundant joint.",
                "images": [
                    {"url": "public/image/Dism310.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "STRUCTURAL MECHANICS LAB",
                "category": "mechanical",
                "productName": "DISM311 - PINNED JOINT MODEL",
                "desc": "Model consists of hinged joints. Model will be able to demonstrate the qualitative behavior of the truss under load, As the members are very flexible, a compression member will easily show it's buckling i.e. it will curve out of plain.The tension member however remains straight and tight.The student will therefore have a visual picture of the type of stresses i.e. compressive or tensile that each member of truss will carry under various positions of the load. In case of pinned joint truss, the student will be able to observe that angle between members at each joint undergo a small change",
                "shortDesc": "odel consists of hinged joints. Model will be able to demonstrate the qualitative behavior of the truss under load, As the members are very flexible, a compression member will easily show it's buckling i.e. it will curve out of plain",
                "images": [
                    {"url": "public/image/Dism311.jpg", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "STRUCTURAL MECHANICS LAB",
                "category": "mechanical",
                "productName": "DISM312 - TWO HINGED ARCH APPARATUS",
                "desc": "Apparatus has a span of 100cm and rise 25cm. Both ends should have hinge but one of the ends should also be free to move longitudinally. A lever arrangement fitted at this end for the application of known horizontal inward force for measuring the horizontal thrust. Along the horizontal span of the arch various points are marked at equidistant for the application of load.This being a statically indeterminate structure of the first degree. A dial gauge with 25mm travel (with magnetic base) will be supplied with the apparatus. Mild steel apparatus will complete with a supporting stand and a set of weights.",
                "shortDesc": "Apparatus has a span of 100cm and rise 25cm. Both ends should have hinge but one of the ends should also be free to move longitudinally. ",
                "images": [
                    {"url": "public/image/Dism312.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "STRUCTURAL MECHANICS LAB",
                "category": "mechanical",
                "productName": "DISM313 - UNSYMMETRICAL BENDING APPARATUS",
                "desc": "Apparatus consists of a mild Steel angle of Size 1 ' x 1' x 1/8” or an equivalent metric units of length 80cm is tied as a cantilever beam. The beam should be fixed at one end such that the rotation of 450 intervals are given and clamped such that the principal axis of its cross, section may be inclined at any angle with the horizontal and vertical planes. Also arrangement will be provided to apply vertical load at the free end of the cantilever and to measure horizontal and vertical deflection of the free end. A dial gauge with 25mm travel (with magnetic base) will be supplied with the apparatus. Apparatus will be supplied complete with a supporting stand and a set of weights.",
                "shortDesc": "Apparatus consists of a mild Steel angle of Size 1 ' x 1' x 1/8” or an equivalent metric units of length 80cm is tied as a cantilever beam. ",
                "images": [
                    {"url": "public/image/Dism313.png", "caption": ""},
                    {"url": "public/image/Dism313a.png", "caption": ""},
                    {"url": "public/image/Dism313b.jpg", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "REFRIGERATION & AIR CONDITIONING LAB",
                "category": "mechanical",
                "productName": "DIR150 - (A) REFRIGERATION TRAINER - GENERAL CYCLE TYPE",
                "desc": "The unit consists of vapor compression refrigeration cycle provided with components normally used in refrigeration system so that students can get familiar with the components.Various measurement provided enable students to estimate the performance of the system.\nSpecification\n1.	Compressor- Hermetically sealed compressor, having capacity of 0.3 T.\n2.	Expansion Devices\n*	Thermostatic Expansion Valve * Capillary tube.\n3.	Evaporator coil.\n4.	Controls:\n*	Services Valve * Solenoid Valve * Filter-Drier for refrigerant\n*	High/Low pressure cutout * Thermostat.\n5.	Measurements:\n*	Thermometers (mercury in glass) - 4 Nos. * Pressure gauges for condensing and evaporating pressure.\n*	Energymeter for compressor *	Voltmeter and Ammeter for compressor.\n*	Rotameter for liquid refrigerant flow measurement A technical manual accompanies the unit.\nService Required\n1.	Floor surface area - 1m x 2m x 2m height.\n2.	220V. 15Amp, Single Phase Stabilized power supply.",
                "shortDesc": "The unit consists of vapor compression refrigeration cycle provided with components normally used in refrigeration system ",
                "images": [
                    {"url": "public/image/Dir150.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "REFRIGERATION & AIR CONDITIONING LAB",
                "category": "mechanical",
                "productName": "DIR151 - (B) REFRIGERATION TRAINER - DOMESTIC TYPE",
                "desc": "The unit enables students to Study the various parameters affecting the performance of a domestic refrigerator. It consists of refrigeration cycle of domestic refrigerator, a hermetically sealed compressor, air-cooled condenser, capillary tube and a natural convection type evaporator.The evaporator is fitted with a small heater to simulate different load conditions various measurements are provided so that power consumption, COP, theoretical and actual refrigerating effects refrigerant flow rate and effect of door opening on power consumption can be studied and also students can visualize automatic operation of unit using a thermostat.\nSpecification\n1.	Compressor - Hermetically sealed, Kirloskar make having capacity of approx. 1/25 ton of refrigeration.\n2.	Air - cooled condenser with natural convection airflow.\n3.	Capillary tube of matched length as expansion device.\n4.	Evaporator coil with an electric heater inside and adequate glass wool insulation on all sides.\n5.	Measurement \n*	Energy meter Tore compressor input power measurement.\n*	Pressure gauge for condensing and evaporating pressure.\n*	Flow meter for liquid refrigerant flow\n*	Digital Temperature indicator for measurement of temperature\n6.	Safety & Controls\n*	High & low pressure cutout. * Thermostat. * Necessary Switches.\nService Required\n1.	Floor surface area of 2m x 1m\n2.	230V AC stabilized supply with earthing connection\nA technical manual accompanies the unit. Also, the unit is provided with an attractive and rust proof powder coating.",
                "shortDesc": "The unit enables students to Study the various parameters affecting the performance of a domestic refrigerator. It consists of refrigeration cycle of domestic refrigerator",
                "images": [
                    {"url": "public/image/Dir151.png", "caption": ""},
                ],
                "featured": "false"
            },
             {
                "labName": "REFRIGERATION & AIR CONDITIONING LAB",
                "category": "mechanical",
                "productName": "DIR152 - (C) REFRIGERATION TRAINER - ELECTROLUX TYPE",
                "desc": "This type of refrigeration is usually used for domestic purposes only as it is complex in the construction and working.This type of refrigerator was developed in 1925 by Munters and Battzervan when they were studying at Royal Institute of Technology At Stockholm for their undergraduate course.This type of refrigerator was known as three fluid refrigeration system.The elimination of aqua pump from the absorption system with the complete absence of moving parts and work input,The main purpose of removing the pump was to make the machine noiseless. It uses refrigerant as a solvent and an inlet gas for inlet of the system.The inert gas is continued to the lower side of system only by its system. It is possible to maintain the uniform pressure throughout the system and after sometime permitting the refrigerant to evaporate at low temperature corresponding to its partial pressure. In the high pressure side system (generator and condenser), there exists only the refrigerant which is subject to total pressure of the system so that it is condensed by using normal cooling water as air as it is done in other system. The strong aqua ammonia solution is heated in generator by the application of external heat source.The water vapor carried with ammonia vapor is removed in separate form as shown in figure.Then the dry ammonia vapor is passed into the condenser and it is condensed by using external cooling source. The liquid ammonia flows under gravity in the evaporator and it evaporates.The mixture of hydrogen and ammonia vapor is passed into the absorber and the weak solution from aqua ammonia from the separator is allowed to flow into the absorber, through tray this weak aqua ammonia solution comes into contact with hydrogen separated.This strong solution is further passed to the generator and it completes the cycle.",
                "shortDesc": "This type of refrigeration is usually used for domestic purposes only as it is complex in the construction and working.",
                "images": [
                    {"url": "public/image/Dir152.png", "caption": ""},
                    {"url": "public/image/Dir152a.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "REFRIGERATION & AIR CONDITIONING LAB",
                "category": "mechanical",
                "productName": "DIR153 - DESERT COOLER TRAINER",
                "desc": "Desert Cooler Trainer works on the principle of evaporative cooling. It is used mostly in the dry hot regions: it consists of a fan which sucks the air from atmosphere through the pads which are used in desert coolers.The difference in OBT & WBT at inlet and outlet can be measured hence, the RH from the charts. Also the amount of water evaporated can be calculated by knowing the water level difference in the reservoir.\nA technical manual accompanies the unit.\nSpecification\n1.	Fan connected to 1/2 HP motor.\n2.	Air Cooler Pump to circulate water.\n3.	DBT & WBT Measuring Thermometer at inlet and outlet.\n4.	Orifice meter with manometer to measure the air flow.\nService Required\n1.	Floor Area - 1m X 1m X 1.5m Height.\n2.	220 V., 15 Amp. , Single Phase Stabilized power supply.",
                "shortDesc": "Desert Cooler Trainer works on the principle of evaporative cooling. It is used mostly in the dry hot regions: it consists of a fan which sucks the air from atmosphere through the pads which are used in desert coolers.",
                "images": [
                    {"url": "public/image/Dir153.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "REFRIGERATION & AIR CONDITIONING LAB",
                "category": "mechanical",
                "productName": "DIR154 - (A) AIR CONDITIONING TRAINER - GENERAL CYCLE TYPE",
                "desc": "he unit consists of ducting fitted with various air conditioning components. Airflow is generated by an axial flow fan and in the airflow, heaters, cooling coil and steam humidifier connection is provided. Cooling circuit consists of a hermetic compressor; air cooled condenser, thermostatic expansion valve and evaporator (i.e. cooling coil). Measurements of various parameters Torn cooling cycle and heating cycle are provided and students can easily visualize and understand the basic principles of air conditioning.\nSpecification\n1.	Cooling circuits - It consists of:\n*	Hermetic compressor. having the capacity of 2/3 ton of refrigeration (approx.) using R-22 refrigerant.\n*	Rotameter for liquid refrigerant flow measurement.\n*	Pressure gauges for high and low pressure.\n*	Prescott (i.e. high and low pressure cut-out).\n*	Thermometers for temperature measurement at various points in the cycle.\n*	Energymeter for compressor input measurement.\n*	Condensate measuring arrangement.\n2.	Heating Circuit - Air heaters with input control provided with energymeter for input measurement. Maximum heating capacity 1 KW.\n3.	Steam generator and injector for humidification of air. All above components are connected to a duct of size 200mm x 200mm in which airflow is generated by axial flow fan.\n4.	Anemometer for measurement of air velocity, (range 0• 1 5 m/sec). Following experiments can be conducted on the unit\n*	Cooling of atmospheric air.\n*	Heating of atmospheric air.\n*	Humidification of atmospheric air.\n*		Dehumidification and heating of atmospheric air. (Cooling coil acts as dehumidifier at reduced airflow,)\nService Required\n1.	440V, 15 A, 3 Phase supply with earthing connection.\n2.	Floor space area about 3 m. X 2 m.",
                "shortDesc": "he unit consists of ducting fitted with various air conditioning components. Airflow is generated by an axial flow fan and in the airflow, heaters, cooling coil and steam humidifier connection is provided.",
                "images": [
                    {"url": "public/image/Dir154a.png", "caption": ""},
                    {"url": "public/image/Dir154b.png", "caption": ""},
                ],
                "featured": "false"
            },
             {
                "labName": "REFRIGERATION & AIR CONDITIONING LAB",
                "category": "mechanical",
                "productName": "DIR155 - (B) AIR CONDITIONING TRAINER - WINDOW TYPE",
                "desc": "Window air conditioner is becoming now a day's a necessity.The unit demonstrates the application of window air conditioner & evaluation of its performance. It consists of a small room to which a small air conditioner is connected.The room is provided with a transparent front cover with a heater inside to simulate heat load in the room. Various measurements are provided so that performance of system that is COP of system, actual & theoretical cooling capacity of system & power consumption of unit with different load conditions.\nSpecification\n1.	Compressor - Hermetically sealed, Kirloskar make, having the capacity of 11/0 ton of refrigeration using R-12 refrigerant to keep room temperature between 20 to 30 C.\n2.	Condenser - Finned tube type, with forced air flow over the tubes.\n3.	Capillary tube of matched length as expansion device.\n4 Evaporator - Finned tube type with forced air flow,\n5. Room — 0.6 X 0.7 X 0.7 m. height, provided with transparent front wall. A heater with input control is provided inside the room,Which simulates different load conditions.\n5.	Measurements and Controls\n*	H.P. / L.P. Pressure gauges\n*	Digital temperature indicator to measure the temperatures at various points.\n*	Energy meters to measure input to compressor & heater.\n*	High and low pressure cutout,\n*	Thermostat to put off the compressor at set room temperature.\n*	Necessary switch for electrical components.\nService Required\n1.	Floor area of 2m X 1m.\n2.	230V, 15AC stabilized earthing connection",
                "shortDesc": "Window air conditioner is becoming now a day's a necessity.The unit demonstrates the application of window air conditioner & evaluation of its performance.",
                "images": [
                    {"url": "public/image/Dir155a.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "REFRIGERATION & AIR CONDITIONING LAB",
                "category": "mechanical",
                "productName": "DIR156 - ICE PLANT TRAINER",
                "desc": "The Plant uses ice can system.The cans filled with fresh wafer are kept in a tank in which brine is circulated. The brine is cooled by the refrigerant, which in turn cools the water in can and ice formation takes place.\nSpecification\n1.	Compressor : Kirloskar make hermetically sealed compressor using R 12 Refrigerant.\n2.	Condenser : 4 row type air cooled.\n3.	Expansion Valve : 0.5 TR capacity.\n4.	Evaporator : ½” O.D. copper tube - 75 feet long,\n5.	Filter Drier : Silica gel filled - 3/8 flare connections,\n6.	Main Tank : 600 mm X 375 mm\n7.	Total Ice Cane Capacity : 7 Kg\n8.	Ice Making Capacity : 7 Kg 14 Hours.\n9.	Theromocol insulation : 6.5 \n10. Brine Stirrer ; Motor driven fan, 1 phase, 1/10 HP. 1440.\nInstrumentation \n1.	Temperature Indicator : Digital Type 03000C, with 1C0 1 % of full reading, least count, using Cr/Al thermocouples. Accuracy\n2.	Compressor Energy Meter : Single Phase, 10 - 20 Amp. Capacity.\n3.	Pressure Gauge:\n*	0-21 Kg/cmi\n*	-1 to 10.6 Kg,'cm'\n*	Both of 65 mm dial.\n4.	Digital Thermometer\nA technical manual accompanies the unit. Controls\n1.	HP/LP Cutout : Auto reset type.\n2.	Thermostat : Auto reset type.\nServices Required\n1.	Floor Area • 2m X 1.5m X 1.5m Height.\n2.	220 V. , 15 Amp. Single Phase Stabilized power supply.",
                "shortDesc": "The Plant uses ice can system.The cans filled with fresh wafer are kept in a tank in which brine is circulated. The brine is cooled by the refrigerant, which in turn cools the water in can and ice formation takes place.",
                "images": [
                    {"url": "public/image/Dir156.png", "caption": ""},
                ],
                "featured": "false"
            },
             
        ];
         await Product.deleteMany({});
        console.log("Old data deleted!");
        await Product.insertMany(allProduct);
        console.log("Database Seeded!");
    } catch (err) {
        console.error("Error in seeding:", err);
    } finally {
        process.exit();
    }}
seedDB();