require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/product');

async function seedDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI);

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
                "labName": "AUTOMOBILE & I.C. ENGINE LAB",
                "category": "mechanical",
                "productName": "DIAL023 Fuel Supply System of 4 Cylinder Diesel Engine (Motorized) ",
                "desc": "This is a working model with original parts, consisting of diesel fuel tank, fuel filter, injection pump and fuel injector. Compete on board.\n (A)	With in Line Pump\n (B) With Rotary Pump",
                "shortDesc": "This is a working model with original parts, consisting of diesel fuel tank",
                "images": [
                    {"url": "public/image/Dial023.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "AUTOMOBILE & I.C. ENGINE LAB",
                "category": "mechanical",
                "productName": "DIAL024 Multi Point Fuel Injection System (Petrol) -Actual Working ",
                "desc": "This is an actual working model of fuel supply system of a MPFI petrol engine.The parts details is as under :\n 1.	Fuel Tank\n 2.	Fuel Filter\n 3.	Motorized Fuel Pump\n 4.	Pressure Gauge\n 5.	Fuel Rail\n 6.	Fuel Injectors\n 7.	ECU\n 8.	Igniter & Ignition Coil\n 9.	Distributor\n 10.	Spark Plugs\n 11.	Power Supply\n 12.	Fuel Gauge & Control Panel\n This model helps the student to understand about the parts & working of MPFI system. It is specially designed for demonstration purposes.The model will be supplied with key card & very interesting literature regarding working.",
                "shortDesc": "This is an actual working model of fuel supply system of a MPFI petrol engine.",
                "images": [
                    {"url": "public/image/Dial024.png", "caption": ""},
                ],
                "featured": "false"
            },
             {
                "labName": "AUTOMOBILE & I.C. ENGINE LAB",
                "category": "mechanical",
                "productName": "DIAL025 - Common Rail Direct Injection System (Diesel) - Actual Working ",
                "desc": "This is an actual working model of fuel supply system of a CRDI diesel engine,The parts details is as under : \n1.	Fuel Tank\n2.	Fuel Filter\n3.	Motorized Fuel Pump\n4.	Pressure Gauge\n5.	Fuel Rail\n6.	Fuel Injectorsel\n7.	ECU\n8.	Power Supply\n9.	Fuel Gauge & Control Panel\nThis model helps the student to understand about the parts & working	of	CRDI	system. It	is	specially	designed	for demonstration purposes.The model will be supplied with key card & very interesting literature regarding working",
                "shortDesc": "This is an actual working model of fuel supply system of a CRDI diesel engine",
                "images": [
                ],
                "featured": "false"
            },
            {
                "labName": "AUTOMOBILE & I.C. ENGINE LAB",
                "category": "mechanical",
                "productName": "(IX)	MISCELLANEOUS PRODUCTS \nDIAL026 - Automotive Stethoscope ",
                "desc": "DIAL026 - Automotive Stethoscope When components of an automobile engine are not functioning properly, they usually sound a warning in the form of noises not common to normal operations. Fortunately most noises posses characteristics of their own which help to identify the sources, coupled with some knowledge of their meaning. The unit is consisting of earphone. amplifier. switch and carbon microphone. assembled in a polished wooden box. Furnished with instructions, and a chart of possible different noise, probable source, mike position and how to check.",
                "shortDesc": "When components of an automobile engine are not functioning properly, they usually sound a warning in the form of noises not common to normal operations",
                "images": [
                ],
                "featured": "false"
            },
            {
                "labName": "AUTOMOBILE & I.C. ENGINE LAB",
                "category": "mechanical",
                "productName": "DIAL027 - Fully Automatic Battery Charger",
                "desc": "The instrument is designed to constant output and has solid-state circuit. Provided with short circuit protection and reverse polarity protection, Built in a nicely finished metal box with indicator, and meter. Input 230 volts A.C. Output 12 volts D.C. at 3 Amperes.",
                "shortDesc": "The instrument is designed to constant output and has solid-state circuit. Provided with short circuit protection and reverse polarity protection,",
                "images": [
                ],
                "featured": "false"
            },
            {
                "labName": "AUTOMOBILE & I.C. ENGINE LAB",
                "category": "mechanical",
                "productName": "DIAL028 - Battery Cell Tester",
                "desc": "TIt is apparatus for testing voltage of cells and batteries. It is a centre zero, fight weight voltmeter of low consumption having robust and compact construction, suitable for in-door and outdoor use. It is housed in steel tough bakelite case which can conveniently be held in one hand while testing. The movement is of the moving coil type and is sufficiently damped and comes to rest quickly. Range 3:0-3 volts or any range as required.",
                "shortDesc": "It is apparatus for testing voltage of cells and batteries. It is a centre zero, fight weight voltmeter of low consumption having robust and compact construction, suitable for in-door and outdoor use",
                "images": [
                ],
                "featured": "false"
            },
             {
                "labName": "AUTOMOBILE & I.C. ENGINE LAB",
                "category": "mechanical",
                "productName": "DIAL029 - Battery Hydrometer - Indian Make",
                "desc": "A hydrometer is an instrument used to measure the specific gravity (or relative density) of liquids. The ratio of the density of the liquid to the density of water.",
                "shortDesc": "A hydrometer is an instrument used to measure the specific gravity (or relative density) of liquids.",
                "images": [
                ],
                "featured": "false"
            },
            {
                "labName": "AUTOMOBILE & I.C. ENGINE LAB",
                "category": "mechanical",
                "productName": "DIAL030 Lubrication System of an Automobile",
                "desc": "In this model the working of lubrication system of a car is shown with the help of actual parts assembled on a metal stand. All the necessary parts of a lubrication system of a car are shown in actual working form.This model helps the student to understand the working of the lubrication system of a car very easily. It is specially made dissectible for demonstration purposes.",
                "shortDesc": "In this model the working of lubrication system of a car is shown with the help of actual parts assembled on a metal stand.",
                "images": [
                    {"url": "public/image/Dial030.png", "caption": ""},
                ],
                "featured": "false"
            },
             {
                "labName": "AUTOMOBILE & I.C. ENGINE LAB",
                "category": "mechanical",
                "productName": "DIAL031 Cooling System of an Automobile",
                "desc": "In this model the working of a cooling system of a car is shown with the help of actual parts assembled on a metal stand. All the necessary parts of a cooling system of a car are shown in actual	working	form,This	model	helps	the student to understand the working of the cooling system of a car very easily. It is specially made dissectible for demonstration purposes.",
                "shortDesc": "In this model the working of a cooling system of a car is shown with the help of actual parts assembled on a metal stand.",
                "images": [
                    {"url": "public/image/Dial031.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "AUTOMOBILE & I.C. ENGINE LAB",
                "category": "mechanical",
                "productName": "Turbo Charger DIAL032 - Actual Cut Section",
                "desc": "The working of turbo charger is shown with the help of actual parts assembled on iron base. All the necessary parts of turbo charger are shown in actual working form.This model helps the student to understand the working of the turbo charger very easily. It is specially made dissectible for demonstration purposes.",
                "shortDesc": "The working of turbo charger is shown with the help of actual parts assembled on iron base. All the necessary parts of turbo charger are shown in actual working form.",
                "images": [
                    {"url": "public/image/Dial032.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "AUTOMOBILE & I.C. ENGINE LAB",
                "category": "mechanical",
                "productName": "Catalytic Concerter DIAL033 - Actual Cut Section",
                "desc": "The working of catalytic converter is shown with the help of actual parts assembled on iron base. All the necessary parts of catalytic converter are shown in actual working form.This model helps the student to understand the working of the catalytic converter very easily. It is specially made dissectible for demonstration purposes.",
                "shortDesc": "The working of catalytic converter is shown with the help of actual parts assembled on iron base. All the necessary parts of catalytic converter are shown in actual working form.",
                "images": [
                    {"url": "public/image/Dial033.png", "caption": ""},
                ],
                "featured": "false"
            },
             {
                "labName": "AUTOMOBILE & I.C. ENGINE LAB",
                "category": "mechanical",
                "productName": "DIAL034 - Front Suspension System",
                "desc": "In this model the working of front suspension system is shown with the help of actual parts assembled on a metal stand. All the necessary parts of a front suspension system are shown in actual working form.This	model helps the student to understand the working of the front suspension system very easily. It is specially made dissectible for demonstration purposes.\n*	Macpherson type suspension system\n*	Double Wishbone type suspension system\n*	Longitudinal Torsion Bar type suspension system",
                "shortDesc": "In this model the working of front suspension system is shown with the help of actual parts assembled on a metal stand.",
                "images": [
                    {"url": "public/image/Dial034.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "AUTOMOBILE & I.C. ENGINE LAB",
                "category": "mechanical",
                "productName": "DIAL035 - Rear Suspension System",
                "desc": "In this model the working of rear suspension system is shown with the help of actual parts assembled on a metal stand. All the necessary parts of a rear suspension system are shown in actual working form.This	model helps the student to understand the working of the rear suspension system very easily. It is specially made dissectible for demonstration purposes.\n*	(Leaf Spring Type Suspension System With Rear Rigid Axle\n*	Rear Independent Type Suspension System",
                "shortDesc": "In this model the working of rear suspension system is shown with the help of actual parts assembled on a metal stand.",
                "images": [
                    {"url": "public/image/Dial035.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "AUTOMOBILE & I.C. ENGINE LAB",
                "category": "mechanical",
                "productName": "(Xl) BRAKES DIFFERENT TYPE - WORKING\n DIAL036 - Single Shoe Brake - Working Model",
                "desc": "The model consists of a brake drum, mounted on a shaft free to rotate in bearings, provided with brake lever, complete on iron base",
                "shortDesc": "The model consists of a brake drum, mounted on a shaft free to rotate in bearings, provided with brake lever, complete on iron base",
                "images": [
                    {"url": "public/image/Dial036.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "AUTOMOBILE & I.C. ENGINE LAB",
                "category": "mechanical",
                "productName": "Double Shoe Brake DIAL037 - Working Model ",
                "desc": "Model consists of a brake drum, provided with two levers carrying shoes. A linkage is used to apply the braking force at the free end bell crank lever. Complete on iron base.",
                "shortDesc": "Model consists of a brake drum, provided with two levers carrying shoes. A linkage is used to apply the braking force at the free end bell crank lever.",
                "images": [
                    {"url": "public/image/Dial037.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "AUTOMOBILE & I.C. ENGINE LAB",
                "category": "mechanical",
                "productName": "Band Brake DIAL038 - Working Model ",
                "desc": "Consists of a brake drum mounted on a shaft, free to rotate in bearings. A flexible band is wrapped partly around the drum. Brake force can be applied with the help of Lever. Complete on iron base.",
                "shortDesc": "Consists of a brake drum mounted on a shaft, free to rotate in bearings.",
                "images": [
                    {"url": "public/image/Dial038.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "AUTOMOBILE & I.C. ENGINE LAB",
                "category": "mechanical",
                "productName": "Band & Block Brake DIAL039 - Working Model ",
                "desc": "The model is similar to the Band Brake Model but rubber blocks are attached to the band.Complete on iron base.",
                "shortDesc": "The model is similar to the Band Brake Model but rubber blocks are attached to the band.",
                "images": [
                ],
                "featured": "false"
            },
            {
                "labName": "AUTOMOBILE & I.C. ENGINE LAB",
                "category": "mechanical",
                "productName": "Mechanical Disc Brake DIAL040 - Working Model ",
                "desc": "Properly constructed model, complete on base with operating lever.",
                "shortDesc": "Properly constructed model, complete on base with operating lever.",
                "images": [
                    {"url": "public/image/Dial040.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "AUTOMOBILE & I.C. ENGINE LAB",
                "category": "mechanical",
                "productName": "Hydraulic Disc Brake DIAL041 A - Actual Working ",
                "desc": "Suitably sectionised full size unit. Consisting of original parts such as master cylinder assembly, Disc,	caliper,	hydraulically	operated	piston assembly and necessary connections. Completed with operating lever and mounted on heavy iron stand",
                "shortDesc": "Suitably sectionised full size unit. Consisting of original parts such as master cylinder assembl",
                "images": [
                    {"url": "public/image/Dial041.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "AUTOMOBILE & I.C. ENGINE LAB",
                "category": "mechanical",
                "productName": "Hydraulic Drum Brake DIAL041 B - Actual Working (Single Drum) ",
                "desc": "Suitably sectionised full size unit. Consisting of original parts such as :- master cylinder assembly, wheel cylinder, brake shoes, brake drums and necessary	connections.	Completed	with operating lever and mounted on heavy iron stand",
                "shortDesc": "Suitably sectionised full size unit. Consisting of original parts such as :- master cylinder assembly, wheel cylinder",
                "images": [
                    {"url": "public/image/Dial041b.jpg", "caption": "DIAL041 B - Actual Working (Single Drum) "},
                    {"url": "public/image/Dial041c.png", "caption": "DIAL041C - Actual Working (Two Drum)"},
                    {"url": "public/image/Dial041d.png", "caption": "DIAL041 D - Actual Working (Four Drum)"},
                    {"url": "public/image/Dial041e.png", "caption": "DIAL041 E Actual Working Front Disc & Rear Drum"},
                ],
                "featured": "false"
            },
            {
                "labName": "AUTOMOBILE & I.C. ENGINE LAB",
                "category": "mechanical",
                "productName": "Internally Expanding DIAL042 - Mechanical Drum Brake System ",
                "desc": "The model consists of a brake drum, two shoes are pivoted on pins, Braking action can be seen due to application of the force on the cam-lever.",
                "shortDesc": "The model consists of a brake drum, two shoes are pivoted on pins,",
                "images": [
                    {"url": "public/image/Dial042.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "AUTOMOBILE & I.C. ENGINE LAB",
                "category": "mechanical",
                "productName": "DIAL043 Vacuum Assisted Hydraulic Drum Brake with Vacuum Booster & Motorised Vacuum Pump ",
                "desc": "Suitably sectionised full size unit. Consisting of original parts such as master cylinder assembly, Disc, caliper, hydraulically operated	piston	assembly	and	necessary	connections. Completed with operating lever and mounted on heavy iron stand.",
                "shortDesc": "uitably sectionised full size unit. Consisting of original parts such as master cylinder assembly, Disc, caliper, hydraulically operated",
                "images": [
                    {"url": "public/image/Dial043.png", "caption": ""},
                ],
                "featured": "false"
            },
             {
                "labName": "AUTOMOBILE & I.C. ENGINE LAB",
                "category": "mechanical",
                "productName": "DIAL044 Air Brake Actual Working With Motorised Air Compressor ",
                "desc": "Suitably sectionised full size unit. Consisting of original parts such as air tank, air booster, brake shoes, brake drums, mechanically operated lever and necessary connections. Completed with operating lever and mounted on heavy iron stand.",
                "shortDesc": "uitably sectionised full size unit. Consisting of original parts such as air tank, air booster, ",
                "images": [
                    {"url": "public/image/Dial044.png", "caption": ""},
                ],
                "featured": "false"
            },
             {
                "labName": "AUTOMOBILE & I.C. ENGINE LAB",
                "category": "mechanical",
                "productName": "DIAL045 - Anti Lock Braking System (ABS) Trainer",
                "desc": "All modern car are now days fitted with anti lock braking system.This trainer helps the students to understand the working of ABS. The trainer consists of the following parts.\n 1.	Control Panel\n 2.	Break Light\n 3.	ECU\n 4.	ABS Hydraulic Activator,\n 5.	Break Lever,\n 6.	Pressure Gauges,\n 7.	Common Pressure Gauge.\n An anti-lock braking system (ABS) is a safety system that prevents the wheels on a motor vehicle from locking up (or ceasing to rotate) while braking. A rotating road wheel allows the driver to maintain steering control under heavy braking by preventing a skid and allowing the wheel to continue interacting tractively with the road surface as directed by driver steering inputs. ABS offers improved vehicle control and decreases stopping distances on dry and especially slippery surfaces for many drivers, but on loose surfaces like gravel and snow-on-pavement it can slightly increase braking distance, while still improving vehicle control. Stopping a car in a hurry on a slippery road can be very challenging. Anti-lock braking systems (ABS) take a lot of the challenge out of this sometimes nerve-wracking event. In fact, on slippery surfaces, even professional drivers can't stop as quickly without ABS as an average driver can with ABS.",
                "shortDesc": "All modern car are now days fitted with anti lock braking system.This trainer helps the students to understand the working of ABS. ",
                "images": [
                    {"url": "public/image/Dial045.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "AUTOMOBILE & I.C. ENGINE LAB",
                "category": "mechanical",
                "productName": "(XII) ACTUAL CUT SECTION CARBURETORS & AUTOMOBILE PARTS DIAL046 - Carburetors - Actual Cut Section  ",
                "desc": "This model helps the student to understand the working of carburetor very easily. It is specially made dissectible for demonstration purposes. (I)Mikuni Car Type \n(II)Solex Type \n(III)Scooter Type\n(IV) Motor Cycle Type",
                "shortDesc": "This model helps the student to understand the working of carburetor very easily. ",
                "images": [
                    {"url": "public/image/Dial046a.png", "caption": "DIAL046 A"},
                    {"url": "public/image/Dial046b.png", "caption": "DIAL046 B"},
                ],
                "featured": "false"
            },
            {
                "labName": "AUTOMOBILE & I.C. ENGINE LAB",
                "category": "mechanical",
                "productName": "(XII) DIAL047 - Automobile Parts - Actual Cut Section",
                "desc": "This model helps the student to understand the working Of automobile parts very easily. It is specially made dissectible for demonstration purposes. 1.	Self Starter\n 2.	Battery\n 3.	Distributor\n 4.	Ignition Coil\n 5.	Spark Plug\n 6.	Magneto\n 7.	Electrical Fuel Pump \n8. Mechanical Fuel Pump \n 9. nMaster Cylinder \n 10. Brake Cylinder\n 11. Gear Lubricating Pump \n 12. Water Pump or Water Body \n 13. Radiator \n 14. Crank Shaft \n 15. Cam Shaft\n 16. Connecting Rod \n17. Piston With Rings \n18. l.c. Injector \n19. Speedometer \n20. Shock Absorber",
                "shortDesc": "This model helps the student to understand the working Of automobile parts very easily. It is specially made dissectible for demonstration purposes.",
                "images": [
                ],
                "featured": "false"
            },
            {
                "labName": "AUTOMOBILE & I.C. ENGINE LAB",
                "category": "mechanical",
                "productName": "(XIII) ENGINE DEMONSTRATION WORKING MODEL 2 Stroke Petrol Engine",
                "desc": "DIAL048 - Sectional Working Model \n Demonstration engine model is mounted on metal base with printed diagram. Ignition is shown by means of miniature bulb. Carburetor and fuel supply are sectioned.With a crank handle for manual operation.",
                "shortDesc": "Demonstration engine model is mounted on metal base with printed diagram.",
                "images": [
                    {"url": "public/image/Dial048.png", "caption": "DIAL046 A"},
                    {"url": "public/image/Dial049.png", "caption": "4 Stroke Petrol Engine DIAL049 - Sectional Working Model"},
                    {"url": "public/image/Dial050.jpg", "caption": "2 Stroke Diesel Engine DIAL050 - Sectional Working Model"},
                    {"url": "public/image/Dial051.png", "caption": "4 Stroke Diesel Engine DIAL051 - Sectional Working Model"},
                ],
                "featured": "false"
            },
             {
                "labName": "AUTOMOBILE & I.C. ENGINE LAB",
                "category": "mechanical",
                "productName": "Gas Turbines or Turbojet Engine Model DIAL052",
                "desc": "The cut model is constructed of light and strong metal showing Air intake, Axial flow double stage compressor. Fuel supply. Combustion Chamber. Turbine Rotor, Jet Thrust, Exhaust etc. Complete on metal base.",
                "shortDesc": "The cut model is constructed of light and strong metal showing Air intake, Axial flow double stage compressor. Fuel supply. ",
                "images": [
                    {"url": "public/image/Dial052.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "AUTOMOBILE & I.C. ENGINE LAB",
                "category": "mechanical",
                "productName": "Stirling Engine Working Model DIAL053",
                "desc": "The Stirling engine was invented by Robert Stirling. a Scottish minister, in 1816. A Stirling engine is a heat engine that operates by cyclic compression and expansion of air or other gas, the working fluid, at different temperature levels such that there is a net conversion of heat energy to mechanical work.",
                "shortDesc": "The Stirling engine was invented by Robert Stirling. a Scottish minister, in 1816.",
                "images": [
                    {"url": "public/image/Dial053.jpg", "caption": ""},
                ],
                "featured": "false"
            },
             {
                "labName": "AUTOMOBILE & I.C. ENGINE LAB",
                "category": "mechanical",
                "productName": "Wankel Engine Model DIAL054",
                "desc": "The model demonstrates the principle, operation. It is cutaway to show the internal constructional details. Unlike Other engines the rotary piston engine avoids reciprocating parts. The power pistons an arch like triangular rotor which on rotating generates an epitrochoid. Mounted on metal base with printed diagrams.",
                "shortDesc": "TThe model demonstrates the principle, operation. It is cutaway to show the internal constructional details.",
                "images": [
                    {"url": "public/image/Dial054.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "AUTOMOBILE & I.C. ENGINE LAB",
                "category": "mechanical",
                "productName": "Conical Friction Clutch - Working Model",
                "desc": "Properly constructed model. Complete on base with operating lever.",
                "shortDesc": "Properly constructed model. Complete on base with operating lever.",
                "images": [
                    {"url": "public/image/Dial056.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "AUTOMOBILE & I.C. ENGINE LAB",
                "category": "mechanical",
                "productName": "Plate Clutch - Working Model",
                "desc": "Properly constructed model. Complete on base with operating lever.",
                "shortDesc": "PProperly constructed model. Complete on base with operating lever.",
                "images": [
                    {"url": "public/image/Dial057.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "AUTOMOBILE & I.C. ENGINE LAB",
                "category": "mechanical",
                "productName": "Centrifugal Clutch — Working Model",
                "desc": "The model consists of a drum pulley mounted on the output shaft.The input shaft carrying spring controlled fly weights.The	worming can be demonstrated by rotating the input shaft provided with crank handle.The output shaft rotates",
                "shortDesc": "The model consists of a drum pulley mounted on the output shaft.The input shaft carrying spring controlled fly weights.",
                "images": [
                    {"url": "public/image/Dial058.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "AUTOMOBILE & I.C. ENGINE LAB",
                "category": "mechanical",
                "productName": "Coil Spring Type Single Plate Clutch",
                "desc": "The working of coil spring type clutch is shown with the help of actual parts assembled on square iron pipe frame. All the necessary parts of coil spring type clutch are shown in actual working form.This model helps the student to understand the working of coil spring type clutch very easily. It is specially made dissectible for demonstration purposes.",
                "shortDesc": "The working of coil spring type clutch is shown with the help of actual parts assembled on square iron pipe frame.",
                "images": [
                    {"url": "public/image/Dial059.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "AUTOMOBILE & I.C. ENGINE LAB",
                "category": "mechanical",
                "productName": "Multiplate Clutch",
                "desc": "A properly constructed all metallic model mounted on metal base with handle drive arrangement.",
                "shortDesc": "A properly constructed all metallic model mounted on metal base with handle drive arrangement.",
                "images": [
                    {"url": "public/image/Dial060.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "AUTOMOBILE & I.C. ENGINE LAB",
                "category": "mechanical",
                "productName": "Diaphragm Type Single Plate Clutch DIAL061 - Actual Working",
                "desc": "The working of diaphragm type clutch is shown with the help of actual parts assembled on square iron pipe frame. All the necessary parts of diaphragm type clutch are shown in actual working form.This model helps the student to understand the working of diaphragm type clutch very easily. It is specially made dissectible for demonstration purposes.",
                "shortDesc": "The working of diaphragm type clutch is shown with the help of actual parts assembled on square iron pipe frame.",
                "images": [
                    {"url": "public/image/Dial061.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "AUTOMOBILE & I.C. ENGINE LAB",
                "category": "mechanical",
                "productName": "Fluid Flywheel or Torque Converter DIAL062 - Actual Cut Section ",
                "desc": "Fluid flywheel or torque converter works as clutch in automatic gear box. The working of fluid flywheel or torque converter is shown with the help of actual parts assembled on square iron pipe frame. All	the necessary parts of fluid flywheel or torque converter are shown in actual form.This model helps the student to understand the working of fluid flywheel or torque converter very easily. It is specially made dissectible for demonstration purposes .",
                "shortDesc": "Fluid flywheel or torque converter works as clutch in automatic gear box. The working of fluid flywheel or torque converter",
                "images": [
                    {"url": "public/image/Dial062.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "AUTOMOBILE & I.C. ENGINE LAB",
                "category": "mechanical",
                "productName": "(XV) TRACTOR MODELS DIAL63 - Tractor — Actual Cut Section (Motorized)",
                "desc": "All the parts of a actual tractor are cut section to demonstrate the working of internal parts.This actual cut section model is painted beautifully with different colours combinations. In this model the working of tractor is demonstrated with the help of actual parts assembled on an iron frame.This model helps the student to understand the working of the Tractor very easily. It is specially made dissectible for demonstration purposes.The model will be supplied with key card & very interesting literature regarding working of the tractor.",
                "shortDesc": "All the parts of a actual tractor are cut section to demonstrate the working of internal parts.",
                "images": [
                    {"url": "public/image/Dial063.jpg", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "AUTOMOBILE & I.C. ENGINE LAB",
                "category": "mechanical",
                "productName": "DIAL064 - Electrical System of Tractor Mock Lay out",
                "desc": "Is is open type instructional apparatus with original parts.This unit is capable of operation when a standard battery is Connected to the given terminals. Consisting of all essential parts as self starter, alternator, ampere-meter, horn long lights with dipper light, Park lights, dipper, back back stop light and switches.The whole system is beautifully fitted on 100 x 80 cm base with electric motor working on 220 volts A.C and capable to drive the alternator.Without Battery.",
                "shortDesc": "Is is open type instructional apparatus with original parts.This unit is capable of operation when a standard battery is Connected to the given terminals.",
                "images": [
                ],
                "featured": "false"
            },
             {
                "labName": "AUTOMOBILE & I.C. ENGINE LAB",
                "category": "mechanical",
                "productName": "DIAL065 - Tractor Differential Gear Assembl Actual Cut Section",
                "desc": "The working of tractor differential is shown with the help of actual parts assembled on square iron pipe frame. All the necessary parts of tractor differential are shown in actual working form. This model helps the student to understand the working of tractor differential very easily. It is specially made dissectible for demonstration purposes.",
                "shortDesc": "The working of tractor differential is shown with the help of actual parts assembled on square iron pipe frame.",
                "images": [
                    {"url": "public/image/Dial065.png", "caption": ""},
                    {"url": "public/image/Dial065a.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "AUTOMOBILE & I.C. ENGINE LAB",
                "category": "mechanical",
                "productName": "(XVI) ENGINE TEST RIGS DIAL066 - Single Cylinder Diesel Engine Test Rig",
                "desc": "The Set-up consists of 1 Cylinder. 4 Stroke Diesel Engine connected to Dynamometer for variable loading.The Setup has stand-alone type independent panel box consisting of air box, fuel tank, and manometer, fuel measuring unit, digital speed indicator and digital temperature indicator. Engine Jacket cooling water Inlet, Outlet and Exhaust Gas Temperature is displayed on temperature indicator. Rotameters is provided for Cooling Water Flow measurement, \nFeatures :-\n(I)Compact Set-up \n(II )Digital Speed Measurement\n(III) Digital Temperature Indication\nRange of Experiments\n(I) Study of engine performance for power. efficiencies. fuel consumption, air fuel ratio and heat balance. \n Utilities Required\n Electric Supply : Provide 230 + /- 10 VAC, 50 Hz, Single Phase Electric Supply with proper earthing. (Neutral — Earth voltage less than 5 VAC)\n Space : - 3800L x 2500W x 1700H in mm Foundation as per drawing supplied.\n Water Supply : Continuous clean and soft water supply @ 1000 LPH, at minimum Head 20m is needed. Provide tap with % BSP size connection.\n Exhaust : - Provide exhaust pipe 32 NB 11/4” size with suitable length.\n Drain :- Provide drainpipe 11/2”BSP size with suitable length.\n Fuel, Oil : Diesel : 10 Ltrs. Lubricating Oil : 5 Ltrs \n Specification :-\n Product:Engine Test Set-up 1 Cylinder, 4 Stroke, Diesel\n Engine:Make - Kirloskar, Model — AVI,Type 1 Cylinder, 4 Stroke Diesel.Water Cooled, Power 5 HP at 1500 RPM, Stroke 110 mm, Bore 80.0 mm. Compression ratio 16.5 : 1, Capacity 553 cc.\n Dynamometer:Type Rope with Set of Weights | Type Electrical with Loading Device Type Hydraulic with Loading Device | Type Eddy Current with Loading Device\n Air Box:M.S. Fabricated with Manometer\n Fuel Tank:Capacity 15 Ltrs.With Column \n Speed Indicator:Digital Speed Sensor\n Temperature:Type Digital. Multipoint, Input K type Thermocouple Indicator \n Temperature:Thermocouple,Type K Sensor\n Rotameter:Range 40 - 400 LPH\n A good quality painted rigid MS Structure is provided to support all the parts.",
                "shortDesc": "The Set-up consists of 1 Cylinder. 4 Stroke Diesel Engine connected to Dynamometer for variable loading.",
                "images": [
                    {"url": "public/image/Dial066.png", "caption": ""},
                    {"url": "public/image/Dial066a.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "AUTOMOBILE & I.C. ENGINE LAB",
                "category": "mechanical",
                "productName": "DIAL067 Two Stroke Single Cylinder Petrol Engine Test Rig ",
                "desc": "IC engines are widely used in automobile, domestic and industrial sector,They are classified according to cycle, number of cylinders. Arrangement of cylinders, fuel used, type of ignition, valve arrangement, cooling system.Test rigs are used to find out the performance of an IC engine. It consists of an IC Engine, dynamometer, fuel measuring, air intake measuring and various other arrangements.\n Experiments\n *	To determine Brake Horse Power\n *	To determine fuel consumption\n *	To determine specific fuel consumption\n *	To determine Brake Thermal Efficiency\n Technical Specification\n Type of Engine Single cylinder, two stroke, air cooled, Hand start, self lubricating, petrol engine. \nType of Loading\n Rope Brake arrangement with the brake drum fitted on the engine shaft and provided spring balance.\n Electric Brake Dynamometer - The engine is coupled with electrical alternator with resistance loading arrangement. Digital voltmeter and digital ammeter is provided.\n Fuel Measuring System Fuel measuring system consists of a fuel tank, a burette and a three way cock arrangement. \nAir Intake Measuring System\n Air tank fitted with orifice and water manometer. \nExhaust Gas Calorimeter\n An Exhaust Gas Calorimeter, made of Stainless Steel is provided for calculating heat carried away by exhaust gas The body of the calorimeter is insulated and thermometers are provided to measure the temperature of water and gas. \nThe whole setup is well designed and supported by a good quality painted rigid M.S. Structure.",
                "shortDesc": "IC engines are widely used in automobile, domestic and industrial sector,They are classified according to cycle, number of cylinders. ",
                "images": [
                    {"url": "public/image/Dial067.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "AUTOMOBILE & I.C. ENGINE LAB",
                "category": "mechanical",
                "productName": "DIAL068 - Single Cylinder Four Stroke Petrol Engine Test Rig",
                "desc": "IC engines are widely used in automobile, domestic and industrial sector.They are classified according to cycle, number of cylinders. Arrangement of cylinders, fuel used, type of ignition. valve arrangement, cooling system. Test rigs are used to find out the performance of an IC engine. It consists of an IC Engine, dynamometer, fuel measuring, air intake measuring and various other arrangements.\nExperiments\n*	To determine specific fuel consumption \n* To determine Brake Horse Power\n *	To determine Brake Thermal Efficiency\n Technical Specification \nType of Engine\n Single cylinder. four stroke, air cooled. Hand start, self lubricating, petrol engine.\nType of Loading\nA - Rope Brake Dynamometer Rope :- Brake arrangement with the brake drum fitted on the engine shaft and provided spring balance.\nB - Electric Brake Dynamometer :- The engine is coupled with electrical alternator with resistance loading arrangement. Digital voltmeter and digital ammeter is provided.\n Fuel Measuring System\nFuel measuring system\n consists of a fuel tank, a burette and a three way cock.\n Air Intake Measuring SystemAir tank fitted with orifice and water manometer.\n Exhaust Gas Calorimeter\n An Exhaust Gas Calorimeter, made of Stainless Steel is provided for calculating heat carried away by exhaust gas.The body of the calorimeter is insulated and thermometers are provided to measure the temperature of water and gas.\nThe whole setup is well designed and supported by a good quality painted rigid M.S. Structure.",
                "shortDesc": "IC engines are widely used in automobile, domestic and industrial sector,They are classified according to cycle, number of cylinders. ",
                "images": [
                ],
                "featured": "false"
            },
             {
                "labName": "AUTOMOBILE & I.C. ENGINE LAB",
                "category": "mechanical",
                "productName": "DIAL069 - Multi Cylinder Four Stroke Petrol Engine Test Rig",
                "desc": "The Set-up consists of 3/4 Cylinder, 4 Stroke Petrol Engine connected to dynamometer for engine loading. The Setup has stand-alone type independent panel box consisting of air box, fuel tank, and manometer, fuel measuring unit, digital speed indicator and digital temperature indicator. Engine Jacket cooling water Inlet, Outlet and Calorimeter Temperature is displayed on temperature indicator. Rotameters are provided for cooling water and calorimeter Flow measurement.\nFeatures :-\n*	Compact Set-up\n*	Non contact Digital Speed Measurement\n*	Morse Test\nRange of Experiments :-\n*	Study of engine performance for power. efficiencies, fuel consumption, air fuel ratio and heat balance,\n*	Morse Test \n Utilities Required \n Electric Supply : Provide 230 +/- 10 VAC, 50 Hz, Single Phase Electric Supply with proper earthing. (Neutral Earth voltage less than 5 VAC \n Space :- 3500L x 4400W x 2000H in mm Foundation as per drawing supplied.\n Water Supply :- Continuous clean and soft water supply @ 4000 LPH, Head 10 m. (min), Connection 1” BSP with Tap/valve.\n Drain :- Provide drainpipe 21/2” NB size.\nExhaust :- Provide exhaust pipe 11/2” NB size.\nFuel. oil : Petrol :- 10 Ltrs, Lubricating Oil: 3.5 Ltrs.\nSpecifications\nProduct:Engine Test Set-up 3/4 Cylinder, 4 Stroke. Petrol\nEngine:Refurbished Engine, Make-Maruti 800, 3 Cylinder. 4 Stroke Petrol. BHP 37 at 3600RPM, Capacity 796 CC.Torque 59 @ 2500 RPM, Water Cooled.Without T/M. (Carburetor)\nDynamometer:Type Rope with set of Weights Type Electrical with Loading Device Type Hydraulic with Loading Device Type Eddy Current with Loading Device\nAir Box:M S Fabricated with orifice Meter and Manometer\nFuel Tank:Capacity 15 Ltrs,With Glass Fuel Metering Column\nCalorimeter:Type Pipe in Pipe\nSpeed Indicator:Digital with Non Contact type Speed Sensor\nTemperature:Type Digital. Multipoint, Input K type Indicator Thermocouple\nTemperature Sensor:Thermocouple,Type K\nFuel Flow:Fuel Measuring unit, Range 0-450ml\nAir Flow:Manometer, Range 100 - 0 -100mm\nRotameter:Engine Cooling : 100 -- 1000 LPH, Calorimeter : 40 - 400 LPH\nOverall Dimensions:W 2000xD 2750 xH 1750 mm\nA good quality painted rigid MS Structure is provided to support all the parts.",
                "shortDesc": "The Set-up consists of 3/4 Cylinder, 4 Stroke Petrol Engine connected to dynamometer for engine loading.",
                "images": [
                    {"url": "public/image/Dial069.png", "caption": ""},
                    {"url": "public/image/Dial069a.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "AUTOMOBILE & I.C. ENGINE LAB",
                "category": "mechanical",
                "productName": "DIAL070 - Multi Cylinder Four Stroke Diesel Engine Test Rig",
                "desc": "IC engines are widely used in automobile, domestic and industrial sector.They are classified according to cycle, number of cylinders, arrangement of cylinders, fuel used, type of ignition. valve arrangement, cooling system.Test rigs are used to find out the performance of an IC engine. It consists of an IC Engine, dynamometer, fuel measuring, air intake measuring and various other arrangements.\nExperiments :-\n*To determine specific fuel consumption.\n *	To determine Brake Horse Power.\n *	To determine mechanical efficiency.\n *	To determine Brake Thermal Efficiency.\n *	To determine volumetric efficiency measurement.\n *	To determine indicated thermal efficiency.\nTechnical Specification Type of Engine\nFour cylinder, four stroke engine, vertical water cooled, self start, diesel engine.\nType of Loading\nA - Rope Brake Dynamometer :- Rope Brake arrangement fitted with the Brake drum fitted on the engine shaft and provided with cooling water arrangement dial type spring balances in kg units.\nB - Electric Brake Dynamometer :- The engine is coupled with electrical alternator with resistance loading arrangement. Digital voltmeter and digital ammeter is provided.\nC - Hydraulic Brake Dynamometer :- It consists of weighing gear, control gear, a dead weight in Kg unit suitable for testing the engine at different speeds.The engine and dynamometer are directly coupled on a substantial baseplate\nFuel Measuring System\n Fuel measuring system consists of a fuel tank, a burette and a three way cock arrangement.\nUtilities Required :-\nElectric Supply:Single Phase, 220 V, 5 Amps.\nWater Supply:10 LPM Approx.\nFuel:10 Liters.\nFloor Area:3m X 2m\nTachometer:For RPM measurement\nAir intake measuring system\nAir tank fitted with orifice and water manometer.\nMeasurement of heat carried\nIt consists of inlet outlet piping with flow control valve, water away by cooling water meter. Thermometers are provided to measure the inlet outlet temperature of water. The whole setup is well designed and supported by a good quality painted rigid M.S. Structure.\nExhaust gas calorimeter\nExhaust gas calorimeter - made of Stainless Steel including the body & the tubes for cooling water circulation and designed to get maximum temperature difference.The body of the calorimeter is insulated on all sides to prevent heat losses due to radiation.Thermometers are provided to measure the temperature of water and gas.",
                "shortDesc": "IC engines are widely used in automobile, domestic and industrial sector.They are classified according to cycle, number of cylinders, arrangement of cylinders, ",
                "images": [
                    {"url": "public/image/Dial070.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "AUTOMOBILE & I.C. ENGINE LAB",
                "category": "mechanical",
                "productName": "(XVI) Running Engine For Practicing Assembly & Disassembly",
                "desc": "Engine setup will be prepared by using good working condition petrol or diesel engine with all the fittings of the engine along with air filter, starter. battery, alternator, indication meters, fuel tank, electrical wiring. All mounted on to a sturdy iron frame with caster wheels (mobile trolley). All the fittings such as meter, fuel tank, radiator along with the engine will be arrange on to the trolley with its original fittings,With the help of these engine the students can practice assembly & disassembly under the supervision of there teacher.   Tools required for assembly & disassembly can also be provided but at an extra cost.",
                "shortDesc": "Engine setup will be prepared by using good working condition petrol or diesel engine with all the fittings of the engine along with air filter, starter.",
                "images": [
                    {"url": "public/image/Dial071.png", "caption": "Two Stroke Single Cylinder Petrol Engine\nDIAL071 - Manual Start\nFour Stroke Single Cylinder Petrol Engine Manual Start "},
                    {"url": "public/image/Dial072.png", "caption": "Four Stroke Single Cylinder Diesel Engine\nDIAL072 - Manual Start"},
                    {"url": "public/image/Dial073.png", "caption": "Four Stroke Four Cylinder Diesel Engine CRDI Type\nDIAL073 - Self Start"},
                    {"url": "public/image/Dial074.png", "caption": "Four Stroke Six Cylinder Diesel Engine\nDIAL074 - Self Start"},
                    {"url": "public/image/Dial075.png", "caption": "Four Stroke Four Cylinder Diesel Engine\nDIAL075 - Self Start"},
                    {"url": "public/image/Dial076.png", "caption": "Four Stroke Three Cylinder Petrol Engine Carburetor\nDIAL076 - Self Start"},
                    {"url": "public/image/Dial077.png", "caption": "Cylinder Petrol Engine MPFI Type Four Stroke Single\nDIAL077 - Self Start"},
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
                    {"url": "public/image/Dit517.png", "caption": ""},
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
                    {"url": "public/image/Ditl735.jpg", "caption": ""}, 
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
                "labName": "STRUCTURAL MECHANICS LAB",
                "category": "mechanical",
                "productName": "DISM300 APPARATUS FOR VERIFICATION OF CLARKE'S MAXWELL RECIPROCAL THEOREM",
                "desc": "Apparatus consist of a mild steel beam 100cm long and 1.25cm x 4mm in cross section with graduations at every 10cm along the length. It should be supported on two knife edge supports 70cm apart with a 30cm overhang on one side. Reciprocal theorem can be verified by direct measurements of the deflections of various points with the help of a dial gauge due to a load placed at the reciprocal points. A dial gauge with 25mm travel (with a magnetic base) will be supplied with the apparatus. Apparatus will be supplied complete with a supporting stand and a set of weights.\n Experimental Capabilities\n * To verify Clerk's Maxwell reciprocal theorem by means of a mild steel beam",
                "shortDesc": "Apparatus consist of a mild steel beam 100cm long and 1.25cm x 4mm in cross section with graduations at every 10cm along the length. ",
                "images": [
                    {"url": "public/image/Dism300.png", "caption": ""},
                ],
                "featured": "true"
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
                "shortDesc": "The unit consists of vapor compression refrigeration cycle provided with components normally used in refrigeration system so that students can get familiar with the components.",
                "images": [
                    {"url": "public/image/Dir150.png", "caption": ""},
                ],
                "featured": "true"
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
                    {"url": "public/image/Dir155.png", "caption": ""},
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
            
            {
                "labName": "REFRIGERATION & AIR CONDITIONING LAB",
                "category": "mechanical",
                "productName": "DIR157 - WATER COOLER TRAINER",
                "desc": "The apparatus consists of a storage water tank, embraced by evaporator coil of the cooling unit. Cooling cycle comprises of a hermetically sealed compressor, air-cooled condenser. a capillary tube as expansion device and an evaporator cell.The stainless steel water tank is provided with insulation on air Sides and a door is provided at the top. Cold water can be taken out from the top provided and inlet water supply is controlled by a bail-operated top.Various measurements provided, enable students to determine the theoretical and actual COP, power consumption, actual cooling capacity refrigerant flow and compressor volumetric efficiency of compressor.\nSpecification\n1.	Cooling Cycle\n*	Compressor Hermetically sealed type, having the capacity of 1/3 ton of refrigeration using R-12\nrefrigerant.\n*	Finned tube type air cooled condenser with forced air flow.\n*	Filter cum drier for refrigerant.\n*	Capacity expansion device.\n*	Evaporator coil embraced on stainless steel water tank, Provided with glass wool Insulation.\n2.	Water drain tap and float operated inlet water tap are provided for water tank with insulated lift door at top.\n3.	Measurement\n*	Pressure gauges for evaporating and condensing pressure.\n*	Thermometers to measure refrigerant temperatures at inlet and out let of condenser and evaporator.\n*	Dial type thermometer for water temperature.\n*	Rotameter to measure liquid refrigerant flow.\n*	Energy meter to measure compressor Input.\n4.	Safely & Controls\n*	Thermostat to put off compressor at set water temperature.\n*	Pressostat to put off compressor if high or low pressure Goes out of set limit.\n*	Over load protector for compressor. A technical manual accompanies the unit.\nServices Required\n1.	Floor space of 1.5mX 1.5m\n2.	Water supply of 5 lit/min\n3.	230 V, 15A AC stabilized supply.",
                "shortDesc": "The apparatus consists of a storage water tank, embraced by evaporator coil of the cooling unit. Cooling cycle comprises of a hermetically sealed compressor",
                "images": [
                    {"url": "public/image/Dir157.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "REFRIGERATION & AIR CONDITIONING LAB",
                "category": "mechanical",
                "productName": "DIR158 - MECHANICAL HEAT PUMP TRAINER",
                "desc": "Heat Pump is a device to pump heat from one source to another.The heat obtained by heat pump is more than that could be obtained by direct electrical heating.The apparatus consists of refrigeration system with water cooled shell and coil type evaporator and condenser.\nSpecification\n1.	Compressor - Hermetically sealed compressor using R-12 refrigerant. having capacity 0.3 tons of refrigeration. Condensing pressure - max. 1 5 Kg/cm2(Actual pressures will depend upon working conditions).\n2.	Condenser - Shell and coil type with continuous water flow arrangement.\n3.	Evaporator - Shell and coil type with continuous water flow arrangement.\n4.	Expansion Valve • Internally equalized thermostatic expansion valve.\n5.	Measurements -\n*	Rotameter for condenser & evaporator water flow rate measurement.\n*	Rotameter for liquid refrigerant flow measurement.\n*	Pressure gauges for condensing and evaporating pressure - 2 Nos.\n*	Thermometer for refrigeration cycle & water temp. rneasurement • 7\n*	Wattmeter for compressor input measurement.\n*	Ammeter for compressor current measurement.\n6.	Controls -\n*	HP/LP cutout for compressor.\n*	Overload protector for compressor.\n*	Gate valve to control water flow rates.\n*	Necessary switches and fuse\nA technical manual accompanies the unit.\nService Required\n1.	Floor surface area - 2m X 2m X 1.5m height.\n2.	220V. 15Amp. Single Phase Stabilized power supply.",
                "shortDesc": "Heat Pump is a device to pump heat from one source to another.The heat obtained by heat pump is more than that could be obtained by direct electrical heating.",
                "images": [
                    {"url": "public/image/Dir158.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "REFRIGERATION & AIR CONDITIONING LAB",
                "category": "mechanical",
                "productName": "DIR159 - (B) CAR AIR CONDITIONING - (ACTUAL CUT SECTION)",
                "desc": "This model will be made out of original parts.The model will be suitably sectioned to demonstrate the internal construction details showing the minute information, and working of the same, the model will be suitably painted and mounted on a metal or wooden base & supplied with key card & very interesting literature regarding working of the same.",
                "shortDesc": "This model will be made out of original parts.The model will be suitably sectioned to demonstrate the internal construction details showing the minute",
                "images": [
                    {"url": "public/image/Dir159.png", "caption": "(B) CAR AIR CONDITIONING - (ACTUAL CUT SECTION) DIR159"},
                    {"url": "public/image/Dir160.png", "caption": "Window Air Conditioning \nDIR160 - (Actual Cut Section)"},
                     {"url": "public/image/Dir161.png", "caption": "Domestic Refrigerator \nDIR161 - (Actual Cut Section)"},
                      {"url": "public/image/Dir162.png", "caption": "Reciprocating Compressor\nDIR162 - (Actual Cut Section)"},
                       {"url": "public/image/Dir163.png", "caption": "Rotary Compressor\nDIR163 - (Actual Cut Section)"},
                ],
                "featured": "false"
            },
            {
                "labName": "REFRIGERATION & AIR CONDITIONING LAB",
                "category": "mechanical",
                "productName": "Refrigerant Gas Leak Detector DIR164",
                "desc": "In old times refrigerant gas	leakage	was detected with the help of soap foam but with the help of refrigerant gas leak detector we can do the same job in more professional and reliable way.",
                "shortDesc": "In old times refrigerant gas	leakage	was detected with the help of soap foam but with the help of refrigerant",
                "images": [
                    {"url": "public/image/Dir164.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "REFRIGERATION & AIR CONDITIONING LAB",
                "category": "mechanical",
                "productName": "Refrigerant Charging Unit DIR165",
                "desc": "This charging unit is fitted with motorized vacuum pump and other safety devices like pressure gauge. With the help of this charging unit Students can charge the refrigerant gases into compressor or store the gas of a refrigerator or air conditioner inside the cylinder fitted inside the charging unit that can be used later.",
                "shortDesc": "This charging unit is fitted with motorized vacuum pump and other safety devices ",
                "images": [
                    {"url": "public/image/Dir165.png", "caption": ""},
                ],
                "featured": "false"
            },
             {
                "labName": "REFRIGERATION & AIR CONDITIONING LAB",
                "category": "mechanical",
                "productName": "Refrigeration & Air Conditioning Tool Kit DIR166",
                "desc": "This tool kit is a set of twenty tools	used in refrigeration &	air conditioning. With the help	 of	this tool kit students can learn how to operate these tools & also understand there applications",
                "shortDesc": "This tool kit is a set of twenty tools	used in refrigeration &	air conditioning.",
                "images": [
                ],
                "featured": "false"
            },
            {
                "labName": "REFRIGERATION & AIR CONDITIONING LAB",
                "category": "mechanical",
                "productName": "Refrigeration & Air Conditioning Components DIR167",
                "desc": "This actual cut section model is a set of thirty components used in refrigeration & air conditioning. With the help of this model students can understand the working parts of the components used in refrigeration & air conditioning.This model will be made out of original parts.The model will be suitably sectioned to demonstrate the internal construction details showing the minute information, and working of the same, the model will be suitably painted and mounted on a metal or wooden base & supplied with key card & very interesting literature regarding working of the same.",
                "shortDesc": "This actual cut section model is a set of thirty components used in refrigeration & air conditioning.",
                "images": [
                ],
                "featured": "false"
            },
            {
                "labName": "REFRIGERATION & AIR CONDITIONING LAB",
                "category": "mechanical",
                "productName": "(A) Handheld Anemometer DIR168",
                "desc": "This apparatus is used to calculate the wind or air velocity.We can place the anemometer in front of air vent of a window air conditioner and record the air velocity.",
                "shortDesc": "This apparatus is used to calculate the wind or air velocity.",
                "images": [
                    {"url": "public/image/Dir168.png", "caption": ""},
                ],
                "featured": "false"
            },
             {
                "labName": "REFRIGERATION & AIR CONDITIONING LAB",
                "category": "mechanical",
                "productName": "(B) Probe Type Anemometer DIR169",
                "desc": "This apparatus is used to calculate the Wind or air velocity. It has a special probe that can easily enter into air ducts.We can place the anemometer inside the air ducts of air conditioner and record the air velocity.",
                "shortDesc": "This apparatus is used to calculate the wind or air velocity.",
                "images": [
                    {"url": "public/image/Dir169.png", "caption": "(B) Probe Type Anemometer DIR169"},
                    {"url": "public/image/Dir170.png", "caption": "Wet & Dry Thermometer DIR170"},
                    {"url": "public/image/Dir171.png", "caption": "Psychrometer DIR171"},
                ],
                "featured": "false"
            },
             {
                "labName": "HEAT TRANSFER LAB",
                "category": "mechanical",
                "productName": "DIHT0071 - COMPOSITE WALLS APPARATUS",
                "desc": "The apparatus consists of a pair of M.S. plates, Bakelite, brass/aluminum.These plates in series on either side of the heater form a composite wall.The whole unit is clamped in a frame, which can be viewed through the Perspex sheet. The thermocouple tapings enables us to find out the conductivity and resistance of the composite walls.\nSpecifications :-\n1.	Heater - Mica healer of dia. 250 mm.\n2.	Plates -\n*	M.S. plates of thickness 25mm & dia. 250mm - 2 nos.\n*	Bakelite plates of thickness 1 Omm & dia. 250mm-2 nos,\n*	Brass/Aluminum plates of thickness 15mm & dia. 250mm - 2nos.\n3.	Dimmerstat - 2 A capacity,\n4.	Measurements -\n*	A Voltmeter and an Ammeter to measure input power,\n*	Multichannel digital temperature indicator to measure temperatures at various points A technical manual accompanies the unit.\nServices Required\n*	230V, A.C. stabilized supply along with earthing connection.\n*	Bench area 1m x lm x 0.5m height.",
                "shortDesc": "The apparatus consists of a pair of M.S. plates, Bakelite, brass/aluminum.These plates in series on either side of the heater form a composite wall.",
                "images": [
                    {"url": "public/image/Diht0071.png", "caption": ""},
                    
                ],
                "featured": "true"
            },
            {
                "labName": "HEAT TRANSFER LAB",
                "category": "mechanical",
                "productName": "DIHT0072 - LAGGED PIPE APPARATUS",
                "desc": "The apparatus consists of three concentric pipes mounted on suitable stand.The space between innermost and the middle pipe is fixed with a lagging material and the space between the middle and the outer most is filled with and other lagging material.The lagged pipe is heated with a cartridge heater inserted at the axle length of the pipe.Voltmeter and ammeter on the panel can measure the input to the heater.The intermediate temperatures can be measured by the thermocouples attached at the surfaces of the pipe.Thus the resultant conductivity of the materials can be found out.\nSpecifications :-\n1.	Pipes :\n*	GI pipe (innermost) - 6 cm (Outer Diameter).\n*	GI Pipe (Middle) - 8.5 cm (Mean Diameter)\n*	GI Pipe (Outermost) - 10.7 cm(lnner Diameter)\nLength of pipes 1 Meter.\n1.	Heater -Nichrome wire cartridge heater placed centrally, of suitable capacity.\n2.	Control Panel •\n*	Single Phase Dimmerstat - I No.\n*	Voltmeter (0. 250V).1 No.\n*	Ammeter (0- 2A) - I No.\n3.	Temperature Indicator - Multichannel Digital Temperature Indicator ranging (0 - 3000C) using Cr/AI Thermocouples,\nServices Required\n* A.C. Single Phase 230V, electric supply\n* Floor area 1.5m x lm x 0.5m height.",
                "shortDesc": "The apparatus consists of three concentric pipes mounted on suitable stand.",
                "images": [
                    {"url": "public/image/Diht0072.png", "caption": ""},
                    
                ],
                "featured": "false"
            },
            {
                "labName": "HEAT TRANSFER LAB",
                "category": "mechanical",
                "productName": "DIHT0073 - HEAT PIPE APPARATUS",
                "desc": "Heat pipe is an interesting device, which is used to transfer heat from one location to another. The apparatus consists of three pipes, viz. A heat pipe, copper pipe and stainless steel pipe. Ail the pipes have same physical dimensions. Copper and stainless steel pipes serve the purpose of comparison of heat pipe performance, All pipes are mounted vertically with a band heater at lower end and water filled heat sink at upper end. Nearly isothermal operation of heat pipe is clearly visualized from longitudinal temperature distribution of the pipe Specifications :-\n1.	Heat pipe - Stainless Steel pipe, 25 mm O.D., 450 mm Long. Sealed at both ends, evacuated and filled partially with distilled water - one No.\n2.	Copper and stainless steel pipe of same size as that of heat pipe - one each. DEDICATION IN EVERY DIMENSION\n3.	Equal capacity heater at bottom end of each pipe.\n4.	Water filled heat sinks at upper end of each pipe.\n5.	Measurements and controls - \n*	Dimmerstat to control heat input to all the heaters - 4 amp. Capacity One No,\n*	A voltmeter and an ammeter to measure input to heaters One each\n*	Multichannel digital temperature indicator to measure temperatures along the length of pipes. Four thermocouples are provided on each pipe.\n*	Thermometers to note down water temperatures in heat sinks - 3 Nos.\nServices Required\n*	230V A.C. Single Phase supply\n*	Floor area 1m x 0.5m x 0.5m height.",
                "shortDesc": "Heat pipe is an interesting device, which is used to transfer heat from one location to another.",
                "images": [
                    {"url": "public/image/Diht0073.png", "caption": ""},
                    
                ],
                "featured": "false"
            },
             {
                "labName": "HEAT TRANSFER LAB",
                "category": "mechanical",
                "productName": "DIHT0074 - CRITICAL RADIUS OF INSULATING MATERIAL",
                "desc": "At particular radius of insulation over a cylinder. loss of heat is maximum.The unit consists of a G,l. pipe provided with plaster of Paris insulation on out side surface. Four pipes are provided with heater inside having input control, Input to heaters is measured by common voltmeter and ammeter, by controlling input to heaters, it is shown that critical radius of insulation is ratio of thermal conductivity and outside heat transfer co-efficient.\nSpecifications :-\n1.	G. l. Pipes with electrical heater inside - 4 NOS.\n2.	Insulation over the pipes of different thickness.\n3.	Controls and Measurements -\n*	Dimmerstat to control heater input - 4 Nos.\n*	DA voltmeter and ammeter to measure inputs to heater.\n*	DDigital temperature indicator to measure temperatures insulation.\n*	DNecessary switches and controls. A technical manual accompanies the unit.\nServices Required\n*	230V, 5 Amp, A.C. supply with earthing connection.\n*	Floor area 1m x lm x 1.5m height.",
                "shortDesc": "At particular radius of insulation over a cylinder. loss of heat is maximum.The unit consists of a G,l. pipe provided with plaster of Paris insulation on out side surface.",
                "images": [
                    {"url": "public/image/Diht0074.png", "caption": ""},
                    
                ],
                "featured": "false"
            },
            {
                "labName": "HEAT TRANSFER LAB",
                "category": "mechanical",
                "productName": "DIHT0075 - PIN FIN APPARATUS",
                "desc": "The apparatus consists of a channel in which the pin fin is tested in both natural as well as forced convection.The channel is connected to the suction of blower,The blower is operated to touch the pin fin in forced convection only. In natural convection, the window above the pin fin is kept open to the atmosphere, Five thermocouple tapings are given along the length of the fin.Thus the temperature distribution along the length can be distinguished. Also natural and forced heat transfer co-efficient, effectiveness. etc. can be found out.\nSpecifications :-\n1.	Three pin fins-\n* M.S.	*	Brass	*	AI\n2.	Channel - 150mm x 100mm x 1000mm\n3.	Blower - run by FHP motor.\n4.	Orifice meter along with water manometer to measure airflow.\n5.	Voltmeter and ammeter to measure power input.\n6.	Cr- A1 thermocouple with 6 tapings along with temperature indicator.\n7.	Dimmerstat to control power input.\n8.	A band heater to heat the pin fin.\nA technical manual accompanies the unit.\nServices Required\n*	220V, stabilized single phase supply along with earthing Connection.\n*	Floor area 2m x Im x Im height.",
                "shortDesc": "The apparatus consists of a channel in which the pin fin is tested in both natural as well as forced convection.",
                "images": [
                    {"url": "public/image/Diht0075.png", "caption": ""},
                    
                ],
                "featured": "false"
            },
            {
                "labName": "HEAT TRANSFER LAB",
                "category": "mechanical",
                "productName": "DIHT0076 - NATURAL CONVECTION APPARATUS",
                "desc": "The unit consists of a vertical brass pipe heated by a cartridge heater inside it. The pipe looses heat to atmosphere by natural convection. It is fitted in an enclosure to provide undisturbed natural convection currents.Thermocouples are attached on the pipe to measure local temperatures. Heater input is measured on voltmeter and ammeter.Thus Students can determine overall heat transfer coefficient and local transfer coefficients in natural convection at various heat transfer rates.\nSpecifications :-\n1.	Pipe - Brass pipe, 38mm dia. (OD) 500mm long, fitted with cartridge heater inside.\n2.	Thermocouples are fitted along with the length of pipe for Temperature measurement - 7 nos.\n3.	Enclosure 200mm x 200mm x 800mm size. with one side of Perspex sheet.\n4.	Measurements & Controls\n*	A Dimmerstat for heater input control.\n*	Voltmeter and Ammeter for heater input measurement.\n*	Multichannel digital temperature indicator.\nServices Required\n*	230V, 5A, AC. electric supply with earthing connection.\n*	Bench area of 1.5m x 0.75m at working height.",
                "shortDesc": "The unit consists of a vertical brass pipe heated by a cartridge heater inside it. The pipe looses heat to atmosphere by natural convection.",
                "images": [
                    {"url": "public/image/Diht0076.jpg", "caption": ""},
                    
                ],
                "featured": "false"
            },
            {
                "labName": "HEAT TRANSFER LAB",
                "category": "mechanical",
                "productName": "DIHT0077 - FORCED CONVECTION APPARATUS",
                "desc": "The unit consists of a circular pipe: loosing heat by forced convection to air, being forced through it. Constant heat flux is added to pipe by an electrical heater, provided with input control.The pipe surface temperature is measured at various points along length of pipe. Temperature of air at inlet and outlet of test section are measured.Thus. the students can calculate local and overall heat transfer coefficients in forced convection. at various airflow rates and various heat flux values.\nSpecifications :-\n1.	Test pipe - 32mm NB GI pipe, 500 mm long, heated by band heater, outside.\n2.	Centrifugal blower to force air through test pipe with control valve.\n3.	Variac 2A, capacity to force air through test pipe with flow control valve,\n4.	An orifice meter with differential water manometer.\n5.	Voltmeter and Ammeter to measure heater input.\n6.	Multichannel digital temperature indicator to measures various temperatures.\nA technical manual accompanies the unit.\nServices Required\n*	Bench area of about 1m x 0.75m at working Height.\n*	239V, 15A, AC, supply with earthing connection.",
                "shortDesc": "The unit consists of a circular pipe: loosing heat by forced convection to air, being forced through it. Constant heat flux is added to pipe by an electrical heater, provided with input control.",
                "images": [
                    {"url": "public/image/Diht0077.png", "caption": ""},
                    
                ],
                "featured": "false"
            },
            {
                "labName": "HEAT TRANSFER LAB",
                "category": "mechanical",
                "productName": "DIHT0078 - SPECIFIC HEAT OF AIR APPARATUS",
                "desc": "The apparatus consists of heating element, on which the air is blown.The difference in temperature of air is shown by the temperature indicator.The flow of air is measured by the orifice meter.The input to the heater is measured by voltmeter and ammeter.Thus, the specific heat of air can be found out.\nSpecifications :-\n1.	Air blower connected to FHP motor.\n2.	Orifice meter to measure the air flow,\n3.	Heater- I KW heating coil placed centrally in the test section.\n4.	Multi channel digital temperature indicator - range 0 to 3000C.\n5.	Voltmeter and ammeter to measure the heat Input.\nServices Required\n*	220 volts single phase stabilized AC Electric supply.\n*	Floor space-2m X 1 m X 2 m Height.",
                "shortDesc": "The apparatus consists of heating element, on which the air is blown.The difference in temperature of air is shown by the temperature indicator.",
                "images": [
                    
                ],
                "featured": "false"
            },
             {
                "labName": "HEAT TRANSFER LAB",
                "category": "mechanical",
                "productName": "DIHT0079 - HEAT TRANSFER IN AGITATED VESSEL",
                "desc": "The unit consists of a vessel with class wool insulation ail around. A helical coil made of copper is fixed inside the vessel. A motorized agitator is fixed at the center of the coil.The vessel is provided with an electric heater and a controller is also provided for vessel. Heater heats water in the jacket while cold water is circulated through coil,Temperature of circulated water and water In vessel Is measured and thus. heat transfer coefficient at various agitator speeds can be determined.\nbSpecifications :-\nb1.	Vessel approx. 20 lit. capacity, provided with glass wool insulation all around and electric heater at the bottom,\nb2.	Agitator 150 mm dia, with 1/8 HP motor to drive the agitator.\nb3.	Helical coil - 200 dia. 8 turns, made of 3/8 dia. copper tube.\nb4.	Controllers for heater and agitator motor.\nb5.	Temp. Indicator for vessel water temperature and circulated water inlet and outlet.\nbServices Required\nb1.	Single phase 230V, 15A stabilized supply.\nb2.	Water flow at the rate of 4 to 5 lit. per min.\nb3.	Suitable drain arrangement for water.\nb4.	Floor area -1.5 mtr x 1 mtr x 1 mtr height.",
                "shortDesc": "The unit consists of a vessel with class wool insulation ail around. A helical coil made of copper is fixed inside the vessel. ",
                "images": [
                    {"url": "public/image/Diht0079.png", "caption": ""},
                    
                ],
                "featured": "false"
            },
            {
                "labName": "HEAT TRANSFER LAB",
                "category": "mechanical",
                "productName": "DIHT0080 - EMISSIVITY MEASUREMENT APPARATUS",
                "desc": "The apparatus consists of a test plate and a comparator. A black plate is used as a comparator for test plate.When all the physical. dimensions and the temperatures are equal, heat losses from both plates will also be the same, except radiation losses. Hence the input difference will be due to difference in emissive. Both the plates are kept in a panel enclose with perplex front and are given inputs through separate dimmerstats so that temperatures of both can be kept equal.Thus emissivity can determine over a wide range of temperatures.\nSpecifications :-\n1.	Test plate and black plates 160mm Dia. Aluminum plates, mounted in Panel with mica heater inside.\n2.	Instrumental panel consisting of-\n•	Voltmeter and ammeter for input measurement to both heaters through a selector switch.\n•	Separate dimmers for both the plates.\n•	Multichannel digital temperature indicator. A technical manual accompanies the unit.\nServices Required\n*	Space of 1.5mx1m at working height.\n*	230V, 15A. AC supply with earthing connection",
                "shortDesc": "The apparatus consists of a test plate and a comparator. A black plate is used as a comparator for test plate.",
                "images": [
                    {"url": "public/image/Diht0080.png", "caption": ""},
                    
                ],
                "featured": "false"
            },
            {
                "labName": "HEAT TRANSFER LAB",
                "category": "mechanical",
                "productName": "DIHT0081 - STEFAN BOLTZMANS APPARATUS",
                "desc": "The Stefan Boltzmann constant is an important constant in heat transfer,The apparatus determines Stefan Boltzmann constant.The apparatus consists of a hemisphere surrounded by hot water. Hot water is obtained from a water-heating tank.When the blackened disc is inserted at the center of hemisphere. heat is transferred into the disc from hemisphere by radiation and its temperature begins to rise, and from temperature raise rate. (It is measured at the intervalsof 5 sec.) Stefan Boltzmann constant is determined.\nSpecifications :-\n1.	Water heating tank provided with electric immersion heater.\n2.	Hemisphere made of copper sheet. 200mm dia. Surrounded water jacket of 250mm Dia.\n3.	Test disc made of copper 20mm dia. provided with thermocouple at the center.\n4.	Multichannel digital temperature indicator 0-2000C with 0. I0C least counts to measure the temperature of hemisphere and disc.\n5.	Audible buzzer with timer to ring at every 5 seconds. A technical manual accompanies the unit.\nServices Required\n*	Bench area of about 1m x 0.5m at workingheight.\n*	230V, 15A, AC, electric supply with earthing connection.",
                "shortDesc": "The Stefan Boltzmann constant is an important constant in heat transfer,The apparatus determines Stefan Boltzmann constant.",
                "images": [
                    {"url": "public/image/Diht0081.png", "caption": ""},
                    
                ],
                "featured": "false"
            },
            {
                "labName": "HEAT TRANSFER LAB",
                "category": "mechanical",
                "productName": "DIHT0082 - CRITICAL HEAT FLUX APPARATUS",
                "desc": "The apparatus demonstrates the regimes of pool boiling.The test section consists of a test wire surrounded by water of constant temperature.The surface temperature of the test wire is heated by passing current through it. Due to the temperature difference between the wire surface and surroundings, the difference regimes are observed till the burnout point.\nSpecifications :-\n1.	Test wire -35 gauge or 40 gauges. Length Iocm.\n2.	Nichrome heater- 1 KW capacity 1 nos.\n3.	Glass trough of sufficient capacity.\n4.	Table light to observe the test wire.\n5.	Voltmeter and ammeter to measure the input to the test wire.\n6.	Dimmerstat to adjust the voltage.\nA technical manual accompanies the unit.\nServices Required\n*	220V, ISA, stabilized single-phase supply.\n*	Floor surface- 1m x 1m at working height.",
                "shortDesc": "The apparatus demonstrates the regimes of pool boiling.The test section consists of a test wire surrounded by water of constant temperature.",
                "images": [
                    {"url": "public/image/Diht0082.jpg", "caption": ""},
                    
                ],
                "featured": "false"
            },
            {
                "labName": "HEAT TRANSFER LAB",
                "category": "mechanical",
                "productName": "DIHT0083 - CONCENTRIC TUBE HEAT EXCHANGER",
                "desc": "A.	Plain Tube (Water to Water) The apparatus consists of two concentric tubes. Inner tube consists of copper tube through which hot water flows. While the outer tube consists of GI pipe through which cold water flows.The arrangement enables the parallel and counter flow of the cold water.The inlet and outlet temperatures and the flow measurement enable to find out the heat exchanged LMTD, and effectiveness of the equipment.\n Specificaion\n 1.	Inner copper tube I.D, 12.7mm and outer G. l. Pipe I. D. 15mm approx. and 1.5m length.\n 2. Thermometers 4 nos.\n 3. Measuring flask - 1 Lit. capacity.\n 4.	Geyser-3 KW, Single phase.\n B.	Finned Tube ( Water to Air )\n The apparatus consists of two concentric tubes. Inner tube consists of copper tube through which hot water flows. It is finned at its outer diameter to increase the heat transfer surface.While the outer tube consists of GI pipe through which cold air flows,The arrangement enables the parallel and counter flow of the air,The inlet and outlet temperatures and the flow measurement	enable	to	find out	the	heat	exchanged	LMTD, and effectiveness of the equipment.\n Specificaion\n 1.	Inner copper tube I.D. 12.7mm and outer G. l. Pipe l. D. 25mm approx. and 1m length.\n 2.	Thermometers - 4 nos.\n 3.	Orifice meter along with manometer.\n 4.	Measuring flask- 1 Lit. Capacity.\n 5.	Geyser-3 KW. Single phase.\n Services Required\n *	220V, I5A, stabilized single-phase AC supply.\n *	Floor surface- 3m x 1m at height.",
                "shortDesc": "A.	Plain Tube (Water to Water) The apparatus consists of two concentric tubes. Inner tube consists of copper tube through which hot water flows.",
                "images": [
                    {"url": "public/image/Diht0083.png", "caption": ""},
                    
                ],
                "featured": "false"
            },
            {
                "labName": "HEAT TRANSFER LAB",
                "category": "mechanical",
                "productName": "DIHT0084 - SHELL & TUBE HEAT EXCHANGER ( WATER TO WATER )",
                "desc": "Heat exchanger is the device used to transfer the heat from one fluid to other.The shell and tube heat exchanger is two tube single pass heat exchanger. The hot fluid is hot water obtained from water heater.The coil fluid is cold water.The schematic flow arrangement is shown in figure. Hot water enters the lower side of end box, flows through the tubes in lower half of shell and comes to the other end of the shell, I reverses its direction, flows through tubes in upper half of the Shell and leaves out. Cold water enters lower part of the shell passes over the tubes between the baffles and leaves out the shell through outlet at upper surface of shell,\nSpecifications :-\n1.	Shell - 150NB, 750 mm long provided with end boxes.\n*	One end box with divider plate.\n*	25% cut baffles •4 Nos. in the shell.\n2.	Tubes • 4.5mm I.D., 6.35mm O.D.,250 mm length copper tubes with triangular pitch.\n3.	Instantaneous water heater, 3 KW capacity, to supply hot water,\n4.	Thermometer for measuring the water temperature.\n5.	Valves to control hot and cold water flow.\nServices Required\n*	3PH, AC supply\n*	Floor space I.5m x 1m\n*	230V, 15A, AC supply with earthing connection.\n*	Water supply at the rate of about 10 lit/min at constant heat.",
                "shortDesc": "Heat exchanger is the device used to transfer the heat from one fluid to other.The shell and tube heat exchanger is two tube single pass heat exchanger.",
                "images": [
                    {"url": "public/image/Diht0084.jpg", "caption": ""},
                    
                ],
                "featured": "false"
            },
            {
                "labName": "HEAT TRANSFER LAB",
                "category": "mechanical",
                "productName": "DIHT0085 - PLATE TYPE HEAT EXCHANGER APPARATUS",
                "desc": "The unit consists of a plate type heat exchanger, in which cold fluid is cold water and hot fluid is hot water. which is obtained from geyser.The inner and outer connections of the fluids are positioned so as to make the exchanger counter flow type. Hot and cold fluids pass between alternate plates various measurements provided enables the students to determine heat transfer rate, LMTD. heat transfer coefficients and effectiveness of the heat exchanger.\nSpecifications :-\n1.	Heat Exchanger- S.S. Plate heat exchanger.\n2.	Geyser to obtain hot water - 3 KW capacity.\n3.	Calibrated water flow measuring vessel\n4.	Thermometers to measure inlet and outlet temperatures of fluid.\n5.	Flow controls valves.\nOptional Accessories\n1.	Rotameters to measure water flow rates instead of measuring vessel.\n2, Multi channel digital temperature Indicator to measure the temperatures instead of thermometers.\nServices Required\n*	Floor space 1-5m X 1m\n*	230V, 15A, AC supply with earthing connection.\n*	Water supply at the rate of about 10 lit/min at constant heat.",
                "shortDesc": "The unit consists of a plate type heat exchanger, in which cold fluid is cold water and hot fluid is hot water.",
                "images": [
                    
                ],
                "featured": "false"
            },
            {
                "labName": "HEAT TRANSFER LAB",
                "category": "mechanical",
                "productName": "DIHT0086 - THERMAL CONDUCTIVITY OF METAL ROD",
                "desc": "The apparatus consists of a copper bar, which is heated at one end, a heat sink is provided at other end.The test section of bar is properly insulated and thermocouples are attached along the length of bar. Heat conducted through the section of bar is measured by heat collection in water-cooled heat sink. A panel comprising of controls and measurements is provided. which provides easy operation and sturdy mounting of unit.\nSpecifications :-\n1.	Metal Bar - 25mm of adequate length, provided with 8 Thermocouples along the length, Band heater at one end and water-cooled heat sink at other end.Test portion of bar is insulated.\n2.	Instruments panel comprising of.\n*	Voltmeter	1 No.\n*	Ammeter	1 No.\n*	Dimmerstat 0-230V, 2A, capacity.\n*	Multichannel Digital temperature Indicator.\n3.	Measuring flask and Stop clock\nServices Required\n*	Bench area of 1.5m x 1m at working height.\n*	230V. AC, electric supply with earthing connection.\n*	Water supply at the rate of 2 lit/mm",
                "shortDesc": "The apparatus consists of a copper bar, which is heated at one end, a heat sink is provided at other end.The test section of bar is properly insulated and thermocouples are attached along the length of bar.",
                "images": [
                    {"url": "public/image/Diht0086.png", "caption": ""},
                    
                ],
                "featured": "false"
            },
            {
                "labName": "HEAT TRANSFER LAB",
                "category": "mechanical",
                "productName": "DIHT0087 - THERMAL CONDUCTIVITY OF INSULATING POWDER",
                "desc": "The apparatus consists of an insulating powder, which is enclosed in acavity of two concentric spheres.The inner space of the inner sphere contains the mica heater. Input to the heater can be adjusted by the dimmerstat.The tappings on the surfaces of the inner sphere and outer sphere are used to find out the temperature difference between the spheres.This enables to find out the conductivity of powder.\nSpecifications :-\n1.	Inner sphere dia. 100mm and outer sphere dia. 200mm,\n2.	Mica heater to heat the inner sphere surface.\n3.	Ten thermocouple tappings in the test section.\n4.	Plaster of Paris / asbestos powder in the test section,\n5.	Panel comprises of\n*	Voltmeter and ammeter\n*	Dimmerstat\n*	Temperature indicator\nServices Required\n*	220v stabilized single-phase supply.\n*	Floor surface 1m x 0.5m at working height.",
                "shortDesc": "The apparatus consists of an insulating powder, which is enclosed in acavity of two concentric spheres.The inner space of the inner sphere contains the mica heater.",
                "images": [
                    {"url": "public/image/Diht0087.png", "caption": ""},
                    
                ],
                "featured": "false"
            },
            {
                "labName": "HEAT TRANSFER LAB",
                "category": "mechanical",
                "productName": "DIHT0088 - THERMAL CONDUCTIVITY OF LIQUID",
                "desc": "Thermal conductivity of liquid is an important engineering property.The apparatus uses guarded hot plate method for determining thermal conductivity. It consists of hot plate i.e. an electrical heater sandwiched between two plates.The heat loss from hot plate is prevented by using two guard heaters and remove heat from liquid by circulation of water. Input to heaters the temperatures.\nSpecifications :-\n1.	Guarded hot plate assembly comprising of main heater, ring guard heater and top guard heater, mounted over the liquid test cavity.\n2.	Cold plate assembly provided with water connections.\n3.	The assembly is housed in an enclosure box with glass wool insulation.\n4.	Instruments panel consisting of :\n*	Digital voltmeter and ammeter of suitable range.\n*	Dimmerstat for controlling input to the heaters (2 amp. 3 Nos.)\n*	Multichannel digital temperature indicator.\nServices Required\n*	Floor space of about 0.75m x 1.5m at working height.\n*	230V AC electrical supply with earthling connection.\n*	Water flow rate of about 10-15 lit/min. at constant head.",
                "shortDesc": "Thermal conductivity of liquid is an important engineering property.The apparatus uses guarded hot plate method for determining thermal conductivity.",
                "images": [
                    {"url": "public/image/Diht0088.png", "caption": ""},
                    
                ],
                "featured": "false"
            },
            {
                "labName": "HEAT TRANSFER LAB",
                "category": "mechanical",
                "productName": "DIHT0089 - THERMAL CONDUCTIVITY OF INSULATING SLABS BY GUARDED HOT PLATE METHOD",
                "desc": "The apparatus consists of a slab assembly.The main Heater and a radial guard heater are sandwiched between copper plates.The specimen in the form of slabs of equal thickness are placed on either sides of heaters and cooling plates through which water is circulated are on the other sides of the specimen.The radial guard heater ensures all heat of the main heater to pass axially through the specimens which is collected by cooling plates. By knowing the temperatures and heat input, thermal conductivity of specimen can be calculated.The test set up is enclosed in an enclosure with insulation inside to provide undisturbed Surroundings.The design style of the apparatus is similar to as recommended in INDIAN standard.The difference is in sizes.\nSpecifications :-\n1.	Heaters:\n*	Main heater plate 110 mm dia. with mica heater Sandwiched between copper plates,\n*	Radial guard heater plate I.D. 120mm and OD 200 mm mica heater sandwiched between copper plates.\n2.	Water circulated cooling plates -2 nos.\n3.	Dimmerstat-2 A capacity - 2 nos. to independently control Inputs to the heaters.\n4.	Measurements :\n*	A voltmeter and an Ammeter with selector switches to measure inputs, Multichannel digital temperature indicator to measure temperatures at various points, having 0.1C0 A technical manual accompanies the unit.\nServices Required\n*	230 V, A.C. stabilized supply along with earthing connection.\n*	Water supply of about 4-5 lit/min.\n*	Bench area 1m x Im x 0.5m height.",
                "shortDesc": "The apparatus consists of a slab assembly.The main Heater and a radial guard heater are sandwiched between copper plates.",
                "images": [
                    
                ],
                "featured": "false"
            },
            {
                "labName": "HEAT TRANSFER LAB",
                "category": "mechanical",
                "productName": "DIHT0090 - THERMOCOUPLE CALIBRATION TEST RIG",
                "desc": "The Unit helps in calibrating given thermocouple for the range 0C 0to 100C0 .While calibrating, thermocouple is once dipped in ice for 0C0 and then in boiling water for 1000C.This is done till the thermocouple shows the actual temperature of ice (00C) and boiling wafer (1000C) and a linear calibration is set. A mV meter is provided to know the corresponding voltage.\nSpecifications :-\n1.	A digital mV Meter and a digital temperature indicator with 2 different type of thermocouples,\n2.	A water container with heater of 1 KW. A technical manual accompanies the unit. Services Required\n*	Table surface area - 2m X 1 m X 0.5 m height.\n*	220V, 50Hz. Stabilize Electric Power Supply.\n*	Ice cubes - 0.5Kg. Approx.",
                "shortDesc": "The Unit helps in calibrating given thermocouple for the range 0C 0to 100C0 .While calibrating, thermocouple is once dipped in ice for 0C0 and then in boiling water for 1000C.",
                "images": [
                    {"url": "public/image/Diht0090.png", "caption": ""},
                    
                ],
                "featured": "false"
            },
            {
                "labName": "HEAT TRANSFER LAB",
                "category": "mechanical",
                "productName": "DIHT0091 - MASS TRANSFER LAB",
                "desc": "We Are Also Into Manufacturing of The Following Mass Transfer Teaching Equipments.\nWe Can Provide The Detail Specifications of The Following Products on Request.\n1.	Absorption in Packed Bed.\n2.	Absorption in Sieve Plate Column.\n3.	Absorption in Wetted Wall Column.\n4.	Batch Crystallizer.\n5.	Bubble Cap Distillation Column.\n6.	Experimental Water Cooling Tower.\n7.	Fixed Bed Adsorption with Regeneration.\n8.	Fluidized Bed Dryer.\n9.	Forced Draft Ray Dryer.\n10.	Humidification & De-Humidification Apparatus.\n11.	Ion Exchanger.\n12.	Liquid in Liquid Diffusion Apparatus.\n13.	Liquid - Liquid Extraction in Packed Bed.\n14.	Mass Transfer With / Without Chemical Reaction (Solid Liquid System).\n15.	Natural Draft Tray Dryer.\n16.	Packed Distillation Column,\n17.	Rotary Driver.\n18.	Sieve Plate Distillation Column.\n19.	Simple Steam Distillation Set-up.\n20.	Solid - Liquid Extraction (Bonnoto Type).\n21.	Solid - Liquid Extraction (Packed Bed Type).\n22.	Solid in Air Diffusion Apparatus.\n23.	Spray Extraction.\n24.	Swenson Walker Crystallizer.\n25.	Vapour - Liquid Equilibrium Set-up.\n26.	Vapour In Air Diffusion Apparatus.\n27.	Wetted Wall Column.\n28.	York Scheibel's Extraction Column.",
                "shortDesc": "The Unit helps in calibrating given thermocouple for the range 0C 0to 100C0 .While calibrating, thermocouple is once dipped in ice for 0C0 and then in boiling water for 1000C.",
                "images": [
                    
                ],
                "featured": "false"
            },
            {
                "labName": "Asphalt & Pavement",
                "category": "civil engineering",
                "productName": "Asphalt",
                "desc": "Advanced Performance Tests The GCTS provides modular testing systems that allows for a wide variety of asphalt performance tests to be performed. This system is capable of performing\n1.	Dynamic Complex Modulus\n2.	Flow number\n3.	Flow time\n4.	Indirect tension\n5.	Beam fatigue\n6.	Resilient modulus & Direct tension tests.\nThe Asphalt Pavement Tester features advanced software to allows for accurate results and a completely 'turn-key' system. Meets all AASHTO, ASTM, and EN standards.",
                "shortDesc": "Advanced Performance Tests The GCTS provides modular testing systems",
                "images": [
                ],
                "featured": "false"
            },
            {
                "labName": "Asphalt & Pavement",
                "category": "civil engineering",
                "productName": "Dynamic Complex Modulus",
                "desc": "The Dynamic Modulus [E*], the absolute value of the complex modulus, is used to predict the rutting potential of HMA.The GCTS system performs this test with ease in both unconfined and confinded condition, and automatically obtain the master curve. This program includes a function solver to obtain the Master Curve from the tesdats according to AASHTO or Witczak functions.",
                "shortDesc": "The Dynamic Modulus [E*], the absolute value of the complex modulus, is used to predict the rutting potential of HMA.",
                "images": [
                    {"url": "public/image/Asp001.png", "caption": ""}, 
                ],
                "featured": "true"
            },
            {
                "labName": "Asphalt & Pavement",
                "category": "civil engineering",
                "productName": "Indirect Tension and Creep Compliance Test",
                "desc": "The tensile strength of HMA is a major predictor of the service life of pavement. The cracking potential of the HMA is directly related to its tensile strength",
                "shortDesc": "The tensile strength of HMA is a major predictor of the service life of pavement. The cracking potential of the HMA is directly related to its tensile strength",
                "images": [
                    {"url": "public/image/Asp002.png", "caption": ""}, 
                ],
                "featured": "false"
            },
            {
                "labName": "Asphalt & Pavement",
                "category": "civil engineering",
                "productName": "Beam Fatigue Test",
                "desc": "The GCTS Beam Fatigue Testing System can be used to determine the fatigue life of a layer of Hot Mix Asphalt. This system is controlled by the advanced software developed by GCTS and is a completely 'turn-key' system. The software automatically calculates multiple fatigue life parameters, including initial stiffness, maximum tensile stress and strain, flexural stiffness, phase angle, dissipated energy per cycles, and number of cycles to failure",
                "shortDesc": "The GCTS Beam Fatigue Testing System can be used to determine the fatigue life of a layer of Hot Mix Asphalt.",
                "images": [
                    {"url": "public/image/Asp003.png", "caption": ""}, 
                ],
                "featured": "false"
            },
            {
                "labName": "Asphalt & Pavement",
                "category": "civil engineering",
                "productName": "Resilient Modulus Test",
                "desc": "The GCTS Resilient Modulus Testing System features a modular design that allows for various tests to be performed using a single machine. This allows many asphalt and soil parameters to be calculated with this device. This system is completely 'turn-key', so once the specimen has been prepared, all testing procedures are computer controlled.",
                "shortDesc": "The GCTS Resilient Modulus Testing System features a modular design that allows for various tests to be performed using a single machine.",
                "images": [
                    {"url": "public/image/Asp004.png", "caption": ""}, 
                ],
                "featured": "false"
            },
            {
                "labName": "Asphalt & Pavement",
                "category": "civil engineering",
                "productName": "Environmental Chamber",
                "desc": "The GCTS Environmental chamber allows for testing at a specific temperature by either cooling or heating in a wide temperature and with a better than +/-0.5 C precision, using Integrated PID digital control through GCTS application software. Includes high air turnover for maintaining uniform temperatures throughout the chamber, Full size heated multi-panel front window to prevent fogging, and LN2 port and spray nozzle for cooling.",
                "shortDesc": "The GCTS Environmental chamber allows for testing at a specific temperature by either cooling or heating in a wide temperature",
                "images": [
                ],
                "featured": "false"
            },
            {
                "labName": "Asphalt & Pavement",
                "category": "civil engineering",
                "productName": "Direct Shear Test",
                "desc": "The GCTS Direct Shear Testing Systems can perform both constant normal stress and constant normal stiffness direct shear tests on either asphalt or soil specimens. These systems feature closed-loop servo control of the shear load and normal load actuators, and are completely 'turn¬key' systems. Through advanced software and hardware, these systems essentially eliminates all vibrations that would disturb specimen during testing.",
                "shortDesc": "The GCTS Direct Shear Testing Systems can perform both constant normal stress and constant normal stiffness direct shear tests on either asphalt or soil specimens.",
                "images": [
                    {"url": "public/image/Asp005.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "Asphalt & Pavement",
                "category": "civil engineering",
                "productName": "Hamburg Wheel Tracker",
                "desc": "The GCTS Hamburg Wheel-Tracking Tester is used to test submerged, compacted Hot Mix or Warm Mix Asphalt specimens as per AASHTO T 324 standard. The device consists of a reciprocating wheel that is rolled over the specimens while measuring the rate of permanent deformation. A constant load of 705 N is applied to the specimens with a sinusoidal wheel speed of 1 ft/sec in a constant temperature controlled water bath. An LVDT jig is used for continuous measurement of permanent deformation along the path of the rolling wheel.",
                "shortDesc": "The GCTS Hamburg Wheel-Tracking Tester is used to test submerged, compacted Hot Mix or Warm Mix Asphalt specimens as per AASHTO T 324 standard.",
                "images": [
                    {"url": "public/image/Asp006.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "Asphalt & Pavement",
                "category": "civil engineering",
                "productName": "Roller Compactor cum Wheel tracker",
                "desc": "Electro-pneumatically operated machine which combines two Functions, one for preparing Slabs made of bituminous mix (roller compaction) and one for wheel tracking.The roller compaction function Is based on the 'kneading' Method using sliding metal plates aligned vertically in the mould while the wheel Tracking function is in compliance with the 'small-size' method of EN 12697-22 and EN12697-33 Vertical movement is obtained pneumatically and horizontal movement is obtained using a Brushless motor",
                "shortDesc": "Electro-pneumatically operated machine which combines two Functions, one for preparing Slabs made of bituminous mix (roller compaction) and one for wheel tracking.",
                "images": [
                    {"url": "public/image/Asp007.jpg", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "Asphalt & Pavement",
                "category": "civil engineering",
                "productName": "SHRP Test Equipment Range Pressure Ageing Vessel & Vacuum Degassing Oven",
                "desc": "The PAV3 pressure aging vessel is used to simulate in-service oxidative aging of asphalt binder according to procedures developed by the Strategic Highway Research Program (SHRP). The PAV consists of a vertical, stainless steel pressure vessel in a stainless steel cabinet with encased band heaters, a precision sample holder for simultaneous testing of ten specimens, a set of ten TFOT specimen trays, a pressure controller, temperature controller, pressure and temperature measurement devices, temperature and pressure recorder, and a specimen loading and unloading tool. The vacuum degassing oven (VDO) is used to precisely and accurately degas pressure-aged bindersamples to meet the standards. The compact, table-top unit is constructed of stainless steelwith a hinged lid to conserve space while allowing easy access to the stainless steel vacuum chamber.",
                "shortDesc": "The PAV3 pressure aging vessel is used to simulate in-service oxidative aging of asphalt binder according to procedures developed by the Strategic Highway Research Program (SHRP).",
                "images": [
                    {"url": "public/image/Asp008.jpg", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "Asphalt & Pavement",
                "category": "civil engineering",
                "productName": "Rolling Thin Film Oven Test",
                "desc": "The rolling thin film oven is used to measure the effect of heat and air on a moving film of semisolid asphaltic material and is an indicator of the approximate change in properties during conventional hot-mixing. The results of this treatment are determined from measurements of the asphalt properties before and after the test.",
                "shortDesc": "The rolling thin film oven is used to measure the effect of heat and air on a moving film of semisolid ",
                "images": [
                    {"url": "public/image/Asp009.jpg", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "Asphalt & Pavement",
                "category": "civil engineering",
                "productName": "Loss-on-Heat Thin Film Oven",
                "desc": "This dual-purpose 16 cuft oven can be used for loss of heat test and thin film test for bitumen and asphaltic materials. The loss-on-heat oven determines the effect on asphaltic materials of heating in an oven under prescribed conditions. The results are reported in terms of change in sample mass and/or changes in selected properties such as viscosity, penetration and ductility as evidenced by test data taken before and after the oven cycle.",
                "shortDesc": "This dual-purpose 16 cuft oven can be used for loss of heat test and thin film test for bitumen and asphaltic materials.",
                "images": [
                    {"url": "public/image/Asp010.jpg", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "Asphalt & Pavement",
                "category": "civil engineering",
                "productName": "Rotational Viscometer and Rheometer",
                "desc": "The rotational viscometer and Thermosphere with a precision temperature controller provide an excellent solution for those looking for SHRP asphalt binder testing equipment specifically designed to meet the requirements of AASHTO T316/ASTM D4402 high-temperature test methods. The instrument provides a measuring range of 20-6,000,000 cP with 54 speeds in a range from 0.01 to 200 rpm. A graphic display delivers clear data readings and an intuitive full-touch keypad provides efficient data selection.",
                "shortDesc": "The rotational viscometer and Thermosphere with a precision temperature controller provide an excellent solution",
                "images": [
                    {"url": "public/image/Asp011.jpg", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "Asphalt & Pavement",
                "category": "civil engineering",
                "productName": "Bending Beam Rheometer",
                "desc": "The bending beam rheometer (BBR) performs flexural tests on asphalt binder and similar specimens per tests, initially developed by the Strategic Highway Research Program (SHRP), which consist of a constant force being applied to a specimen in a chilled fluid bath in order to derive specific rates of deformation at various temperatures. The complete BBR system consists of a fluid bath base unit, a three-point bend test apparatus, which is easily removed from the base unit for specimen loadingand unloading, an external cooling unit with temperature controller and a calibration hardware kit with carrying case.",
                "shortDesc": "The bending beam rheometer (BBR) performs flexural tests on asphalt binder and similar specimens per tests, initially developed by the Strategic ",
                "images": [
                    {"url": "public/image/Asp012.jpg", "caption": ""},
                ],
                "featured": "false"
            },
             {
                "labName": "Asphalt & Pavement",
                "category": "civil engineering",
                "productName": "Gyratory Compactor",
                "desc": "Superpave Gyratory Compactor is a completely self-contained SGC that is ideal for on-site testing and mobile labs, this SGC can handle design and QC/QA work with equal ease. The superpave gyratory compactor measures the mold angle during compaction. This angle, along with the consolidation pressure, gyration number, and specimen height is displayed throughout the compaction process. Simply enter the compaction parameters, lower the prepared mold into the compaction chamber, securethe gyratory head, and press Start. The system then applies the consolidation pressure, induces the angle, and gyrates the mold until the specified number of gyrations or specified height is reached. Extrude the specimen after compaction with the same hydraulic ram used to compact the specimen.",
                "shortDesc": "Superpave Gyratory Compactor is a completely self-contained SGC that is ideal for on-site testing and mobile labs, this SGC can handle design and QC/QA work with equal ease.",
                "images": [
                    {"url": "public/image/Asp013.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "Asphalt & Pavement",
                "category": "civil engineering",
                "productName": "Gyratory Compactor Servo Controlled",
                "desc": "The GCTS Superpave Gyratory Compactor is expertly designed to yield highly accurate results in the variety of tests it can perform. The introduction of a self-heating mold with precise temperature control makes this system extremely easy to use with only the push of a button. Continuous positive feedback to maintain gyration angle precision throughout compaction with Closed-Loop servo control of ram pressure and tilt angle.Automatic material mass measurement. Measures shear stress.",
                "shortDesc": "The GCTS Superpave Gyratory Compactor is expertly designed to yield highly accurate results in the variety of tests it can perform.",
                "images": [
                    {"url": "public/image/Asp014.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "Asphalt & Pavement",
                "category": "civil engineering",
                "productName": "Marshal Stability Test Automated/      Computerized      Loading      Frames",
                "desc": "The digital MasterLoader provides the ultimate solution for a lab looking to perform Marshall and Hveem testing, but would also like to be able to use the load frame for all their other testing needs as well as soil tests such as CBR and triaxial tests including UU, CU, CD and UC. The digital MasterLoader has the ability to work as a stand¬alone unit, which can perform Marshall tests at the push of a button; or with the aid of Humboldt's Marshall master software and a computer, it can be automated to run tests and gather data in real-time data acquisition in the form of charts and graphs.",
                "shortDesc": "The digital MasterLoader provides the ultimate solution for a lab looking to perform Marshall and Hveem testing, but would also like to be able to use the load frame for all their other testing needs as well as soil tests such as CBR and triaxial tests including UU, CU, CD and UC.",
                "images": [
                ],
                "featured": "false"
            },
            {
                "labName": "Asphalt & Pavement",
                "category": "civil engineering",
                "productName": "Humboldt Marshall Master Software",
                "desc": "Humboldt Marshall master reporting softwareis a stand-alone application used in conjunction with Humboldt's load frames, miniLoggers, etc. to provide real-time data acquisition. The Marshall software provides a simple, test-specific interface to control Marshall test operations and automatically record data while also displaying it in real-time tables and graphs.",
                "shortDesc": "Humboldt Marshall master reporting softwareis a stand-alone application used in conjunction with Humboldt's load frames, miniLoggers, etc.",
                "images": [
                    {"url": "public/image/Asp015.jpg", "caption": ""},
                    {"url": "public/image/Asp015b.jpg", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "Asphalt & Pavement",
                "category": "civil engineering",
                "productName": "Automatic Compactors",
                "desc": "Humboldt Marshall master reporting softwareis a stand-alone application used in conjunction with Humboldt's load frames, miniLoggers, etc. to provide real-time data acquisition. The Marshall software provides a simple, test-specific interface to control Marshall test operations and automatically record data while also displaying it in real-time tables and graphs.",
                "shortDesc": "Humboldt Marshall master reporting softwareis a stand-alone application used in conjunction with Humboldt's load frames, miniLoggers, etc.",
                "images": [
                    {"url": "public/image/Asp016.jpg", "caption": ""},
                ],
                "featured": "false"
            },
             {
                "labName": "Asphalt & Pavement",
                "category": "civil engineering",
                "productName": "Water Baths",
                "desc": "Humboldt water baths feature a microprocessor-based digital controller for precise temperature control throughout their temperature range.",
                "shortDesc": "Humboldt water baths feature a microprocessor-based digital controller for precise temperature control throughout their temperature range.",
                "images": [
                    {"url": "public/image/Asp017.jpg", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "Asphalt & Pavement",
                "category": "civil engineering",
                "productName": "Asphalt/ Binder Content Measurement Ignition Method",
                "desc": "The asphalt content/binder furnace with internal automatic balance is an environmentally-friendly and cost-effective method for the accurate determination of asphalt content. Developed by NCAT, the National Center for Asphalt Technology, USA. The furnace's large capacity handles samples up to 5,000 grams. Ignition method reduces testing time compared to solvent testing methods and automatic operation frees technicians for other tasks.",
                "shortDesc": "The asphalt content/binder furnace with internal automatic balance is an environmentally-friendly and cost-effective method for the accurate determination of asphalt content.",
                "images": [
                    {"url": "public/image/Asp018.jpg", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "Asphalt & Pavement",
                "category": "civil engineering",
                "productName": "Centrifuge Extractor (Explosion Proof)",
                "desc": "The asphalt centrifuge extractor is designed for determining the percentage of bitumen in asphaltic mixtures. These extractors conform to the explosion-proof standards for the safety of operating personnel.",
                "shortDesc": "The asphalt centrifuge extractor is designed for determining the percentage of bitumen in asphaltic mixtures. These extractors conform to the explosion-proof standards for the safety of operating personnel.",
                "images": [
                    {"url": "public/image/Asp019.jpg", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "Asphalt & Pavement",
                "category": "civil engineering",
                "productName": "Centrifuge Extractor, Filterless",
                "desc": "The continuous-flow filterless centrifuge extractor is ideally suited for use in the extraction of mineral fines from bitumen-laden solvents obtained from standard asphalt extraction tests. The system allows the continuous feeding of the suspension until the solids retaining capacity of the beaker is reached.",
                "shortDesc": "The continuous-flow filterless centrifuge extractor is ideally suited for use in the extraction of mineral fines from bitumen-laden solvents",
                "images": [
                ],
                "featured": "false"
            },
            {
                "labName": "Asphalt & Pavement",
                "category": "civil engineering",
                "productName": "Vacuum Extractor",
                "desc": "Basic vacuum extractor for use in quantitative determinations of bitumen in hot-mixed paving mixtures and pavement samples. Provides a 305mm dia filtering surface. Use with a 4,000cc erlenmeyer flask and a vacuum pump.",
                "shortDesc": "Basic vacuum extractor for use in quantitative determinations of bitumen in hot-mixed paving mixtures and pavement samples.",
                "images": [
                ],
                "featured": "false"
            },
            {
                "labName": "Asphalt & Pavement",
                "category": "civil engineering",
                "productName": "Ductility Test Ductility Machines",
                "desc": "Humboldt ductility machines determine ductility of formed asphalt/cement or semi¬solid bitumen by measuring the distance of elongation before reaching the breaking point of a briquette sample, which is pulled apart at a specific speed and temperature. Available as three-speed machines designed for standard and force ductility tests. Tests three briquettes simultaneously and its DC, direct-drive motor maintains constant speed, entirely vibration-free",
                "shortDesc": "Humboldt ductility machines determine ductility of formed asphalt/cement or semi¬solid bitumen by measuring the distance of elongation before",
                "images": [
                    {"url": "public/image/Asp020.jpg", "caption": ""},
                ],
                "featured": "false"
            },
             {
                "labName": "Asphalt & Pavement",
                "category": "civil engineering",
                "productName": "Temperature Controller",
                "desc": "The Circulating Temperature Controller is designed for use with the Humboldt ductility machine. It provides a solid-state, thermostatically controlled bath and circulator to maintain water temperature within a 0.5°C.",
                "shortDesc": "The Circulating Temperature Controller is designed for use with the Humboldt ductility machine. It provides a solid-state, thermostatically controlled bath and circulator to maintain water temperature within a 0.5°C.",
                "images": [
                    {"url": "public/image/Asp021.jpg", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "Asphalt & Pavement",
                "category": "civil engineering",
                "productName": "Force Determination Adapter",
                "desc": "Provides precise tensile strength measurement of any material, preparation, procedure or type of test to an accuracy of 0.01 lbs. Attaches over existing pin in ductilometer without tools or machine modi?cation, eliminating need for dedicated equipment for standard and force ductility testing.",
                "shortDesc": "Provides precise tensile strength measurement of any material, preparation, procedure or type of test to an accuracy of 0.01 lbs.",
                "images": [
                    {"url": "public/image/Asp022.jpg", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "Asphalt & Pavement",
                "category": "civil engineering",
                "productName": "Vacuum Pycnometer (Rice) TestForce Determination Adapter",
                "desc": "Used to determine the maximum specific gravity of bituminous paving mixtures with maximum aggregate size up to 19.1mm.",
                "shortDesc": "Used to determine the maximum specific gravity of bituminous paving mixtures with maximum aggregate size up to 19.1mm.",
                "images": [
                    {"url": "public/image/Asp023.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "Asphalt & Pavement",
                "category": "civil engineering",
                "productName": "Penetrometers Universal Penetrometer",
                "desc": "Direct-reading instrument for precision penetration measurements of bituminous materials, cement, petroleum and waxes, as well as food, cosmetics and pharmaceutical products. Unit has 5 diameter indicator dial, graduated in 400 divisions of 0.1mm, corresponding to 40mm penetration.",
                "shortDesc": "Direct-reading instrument for precision penetration measurements of bituminous materials, cement, petroleum and waxes",
                "images": [
                    {"url": "public/image/Asp024.jpg", "caption": ""},
                ],
                "featured": "false"
            },
             {
                "labName": "Asphalt & Pavement",
                "category": "civil engineering",
                "productName": "Penetrometer for Battery Paste",
                "desc": "Combines the universal penetrometer and a grease cone, which has a hardened steel tip with a special plunger. \nPenetration Needles and Cones A wide range of penetration needles and cones are available that can be used with the Universal Penetrometer to conduct penetration tests on different materials",
                "shortDesc": "Combines the universal penetrometer and a grease cone, which has a hardened steel tip with a special plunger.",
                "images": [
                    {"url": "public/image/Asp025.jpg", "caption": ""},
                ],
                "featured": "false"
            },
             {
                "labName": "Asphalt & Pavement",
                "category": "civil engineering",
                "productName": "Viscosity Measurement Kinematic Viscosity Measurement",
                "desc": "Constant temperature baths to maintain accurate control required by ASTM D445 for kinematic viscosity measurements with glass capillary viscometers.",
                "shortDesc": "Constant temperature baths to maintain accurate control required by ASTM D445 for kinematic viscosity measurements with glass capillary viscometers.",
                "images": [
                    {"url": "public/image/Asp026.jpg", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "Asphalt & Pavement",
                "category": "civil engineering",
                "productName": "Digital Vacuum Pressure Regulators",
                "desc": "These digital vacuum regulators (DVR) aredesigned for precise measurement and control of vacuum at 300 mm Hg below atmosphericpressure. The solid-state Regulators use no mercury and display the amount of vacuum in mm/Hg or one of nine other units of measurement selected using a keypad on the meter.",
                "shortDesc": "These digital vacuum regulators (DVR) aredesigned for precise measurement and control of vacuum at 300 mm Hg below atmosphericpressure.",
                "images": [
                    {"url": "public/image/Asp027.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "Asphalt & Pavement",
                "category": "civil engineering",
                "productName": "Saybolt Viscosity Bath",
                "desc": "Designed for Saybolt universal and furol viscosity testing, this constant temperature bath meets all ASTM and AASHTO requirements for precise temperature control. The micro-processor PID circuitry assures accurate temperature control within ASTM tolerances throughout the range of ambient to 240°C. At the push of a button, the automatic timer starts the sample flow, senses the 60mL end point and digitally records and displays the efflux time in 0.1 seconds resolution with an accuracy of 0.05%.",
                "shortDesc": "Designed for Saybolt universal and furol viscosity testing, this constant temperature bath meets all ASTM and AASHTO requirements for precise temperature control.",
                "images": [
                    {"url": "public/image/Asp028.jpg", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "Asphalt & Pavement",
                "category": "civil engineering",
                "productName": "Pavement \n Compaction Measurement\n Nuclear Density Gauge (NDG)",
                "desc": "Moisture/Density Gaugesuse an advanced micro-processor- based technology to provide highly-accurate measurements of density and moisture that are automatically computed for direct readouts of wet density, dry density, moisture content, percent of moisture, percent of compaction (Proctor or Marshall), void ratio and air voids. The NDG can be used to test the degree of compaction of practically any paving material such as soil, aggregate, asphalt, concrete, even flyash. Manufacturer approved re-calibration facilities are available to ensure that gauge accuracy is maintained over several years of use. ",
                "shortDesc": "Nuclear Density Gauge (NDG) Moisture/Density Gaugesuse an advanced micro-processor- based technology to provide highly-accurate measurements of density",
                "images": [
                    {"url": "public/image/Asp029.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "Asphalt & Pavement",
                "category": "civil engineering",
                "productName": "Electrical Density Gauge (EDG)",
                "desc": "The Electrical Density Gauge (EDG) is a nuclear-free alternative for determining the moisture anddensity of compacted soils used in road beds andfoundations. The EDG is a portable, battery-poweredinstrument capable of being used anywherewithout the concerns and regulations associatedwith nuclear safety. Its user-friendly, step-by-stepmenu guides the user through each step of thetesting procedure and cautions the user when valuesdo not correspond to established curves forthe material being tested. Easy-to-use, the EDG can be used as a constructionaid to monitor day-to-day compaction operationsby providing performance and measurementresults highly comparable to those achieved withtraditional methods, including the nuclear gaugeand/or a sand-cone and oven moisture test combination. ",
                "shortDesc": "The Electrical Density Gauge (EDG) is a nuclear-free alternative for determining the moisture anddensity of compacted soils used in road beds andfoundations.",
                "images": [
                    {"url": "public/image/Asp030.jpg", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "Asphalt & Pavement",
                "category": "civil engineering",
                "productName": "Strength Measurement",
                "desc": "Electronic Plate Bearing Tester - Static The Electronic Plate Load Device allows simple determination of the load-bearing and deformation capacity of soils. The load settlement lines and the modulus of deformation Ev1, Ev2 are determined to DIN 18134:2001-09 or E DIN 18134:2010-04 (plate load test). Thanks to the splashproof housing, external buttons and a backlit display, it can also be used under inclement ambient conditions. Test logs can be printed out directly on site. The results saved on an SD card during the test can be transferred to the PC and are available for further processing under Microsoft Excel® ",
                "shortDesc": "Electronic Plate Bearing Tester - Static The Electronic Plate Load Device allows simple determination of the load-bearing and deformation capacity of soils.",
                "images": [
                    {"url": "public/image/Asp031.png", "caption": ""},
                    {"url": "public/image/Asp031a.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "Asphalt & Pavement",
                "category": "civil engineering",
                "productName": "Dynamic Light Weight Deflectometer/ Drop Weight Tester",
                "desc": "This dynamic plate load test is used in earthworks, civil engineering, road construction and rail track constructionto determine the load-bearing capacity and to assess the compaction of soils, loose base courses and soil improvement in accordance with TP BF StB Part B 8.3. The test method is suitable for course-grained and mixed-grained soils up to a maximum grain size of 63 mm. The test result is displayed in MN/m². The measuring range of the light drop weight tester lies between 15 and 70 MN/m². With the 1.5x impact load achieved with the 15 kg loading device, the measuring range is extended to 70 - 105 MN/m². This is required for heavy base courses in road beds and for ballast.\n Dynamic Light Weight Deflectometer/ Drop Weight Tester-For Asphalt Pavements Similar in operation as the Dynamic Light Weight Deflectometer discussed above but with stamps of small diameters for measurement on Asphalt pavement layers. Extremely useful for quick quality control during the asphalt layer compaction process.",
                "shortDesc": "This dynamic plate load test is used in earthworks, civil engineering, road construction and rail track constructionto determine the load-bearing capacity",
                "images": [
                    {"url": "public/image/Asp032.jpg", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "Asphalt & Pavement",
                "category": "civil engineering",
                "productName": "Geogauge",
                "desc": "The GeoGauge is a unique, QC/QA field tool that can be used to measure the uniformity of unbound pavement layers by measuring the variability in stiffness throughout a structure. It is an excellent tool for identifying construction anomalies that would otherwise go undetected during construction where only density or percent compaction measurements were used. GeoGauge can be used to verify that the stiffness/ modulus values assumed in the design specifications of new or rehabilitated pavement structures are met. This dynamic technology used by the GeoGauge simulates real in-use conditions. This factor allows the GeoGauge to directly measure in-place engineering properties during the construction process.",
                "shortDesc": "The GeoGauge is a unique, QC/QA field tool that can be used to measure the uniformity of unbound pavement layers by measuring the variability in stiffness throughout a structure.",
                "images": [
                    {"url": "public/image/Asp033.jpg", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "Asphalt & Pavement",
                "category": "civil engineering",
                "productName": "Benkelman Beam",
                "desc": "The Benkelman beam measures the deflection of a flexible pavement under moving wheel loads. Extremely accurate and easy to use. Direct-reading dial indicator eliminates need for conversion table or field calculations. This pavement analysis tool provides precision accuracy and it is a light weight tool where no needs for conversions or field calculations, gauges are direct read",
                "shortDesc": "The Benkelman beam measures the deflection of a flexible pavement under moving wheel loads.",
                "images": [
                    {"url": "public/image/Asp034.jpg", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "Asphalt & Pavement",
                "category": "civil engineering",
                "productName": "Skid Resistance, Polishing Portable Skid Resistance Tester",
                "desc": "Measures friction (skid resistance) on flat, cambered,or gradient road surfaces. Originally developedby the Transport and Road Research Laboratoryof Great Britain.A pendulum arm, having a spring-loaded rubber slider on the pendulum foot. Device is placed on the portion of the road surface to be tested. It is then leveled, and the height of the center of suspension of the pendulum is adjusted to a fixed value which is read on a special gauge. The pendulum is then released from its horizontal position, to swing down freely until the rubber slider contacts the test surface. As the slider travels across the surface for a fixed distance, the pendulum is slowed and a frictionally-constrained pointer affixed to the pendulum arm measures the highest point in the pendulum arc. The position of the pointer is then read on a measuring arc graduated from 0 to 150. Pointer readings indicate the resistance to skidding of the test surface. Compact, easily transported and used in thefield. Can be used in remote locations, independent of any vehicle. Enclosed bearings & working parts for protection against wear and contamination ",
                "shortDesc": "Measures friction (skid resistance) on flat, cambered,or gradient road surfaces.",
                "images": [
                    {"url": "public/image/Asp035.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "Asphalt & Pavement",
                "category": "civil engineering",
                "productName": "Accelerated Polishing Machine ",
                "desc": "The accelerated polishing machine polishes samplesof aggregates, simulating actual road conditions,and is used in conjunction with the portableskid resistance tester to determine the polishedstone value for aggregates used in road surfaces,and gives a measure of the resistance to skidding.Fourteen specimens are clamped aroundthe “road wheel” of the polishing machine, andsubjected to two stages of polishing by a loadedrubber tire. First by corn emery, and secondlyby emery flour. Use of the accelerated polishingmachine and the skid resistance tester inroad construction has had a major influence inreduction of accidents.",
                "shortDesc": "The accelerated polishing machine polishes samplesof aggregates, simulating actual road conditions,and is used in conjunction with the portableskid resistance",
                "images": [
                    {"url": "public/image/Asp036.jpg", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "Asphalt & Pavement",
                "category": "civil engineering",
                "productName": "Pavement Strength/ Design Evaluation\n Falling Weight Deflectometer ",
                "desc": "The Falling Weight Deflectometer is used to measure the vertical deflection response of a surface to an impulse load. Precision load measurement and deflection sensors measure and record the pavement surface characteristics that are used to calculate pavement properties, such as Bearing capacity, Layer thickness, E moduli, Expected surface life.\nThis non-destructive testing device can determine the actual material used and in what combination to build the\npavement surface. It also identifies voids underneath the surface or how two surfaces (typically concrete slabs) are in contact with each other.\nAvailable as Standard Falling Weight Deflectometer and Heavy Falling Weight Deflectometer.",
                "shortDesc": "The Falling Weight Deflectometer is used to measure the vertical deflection response of a surface to an impulse load.",
                "images": [
                    {"url": "public/image/Asp037.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "Asphalt & Pavement",
                "category": "civil engineering",
                "productName": "Traffic Speed Deflectometer",
                "desc": "The Traffic Speed Deflectometer, TSD is a rolling wheel deflectometer for network level bearing capacity measurement. Using a patented Doppler technology it is possible to measure the pavement response to an applied 10 - ton axle load travelling at traffic speed of up to 80 km/h. TSD data provides continuous pavement deflection profiles, from which bearing capacity indices can be derived and pavement fatique / residual life can be estimated. TSD is the ideal tool to measure the bearing capacity of large road networks. The high accuracy and resolution makes TSD perfect to pin point locations with bearing capacity deviations.Detailed knowledge of the network bearing capacity minimize the need for traditional stationary or slow moving, discrete measuring techniques.",
                "shortDesc": "The Traffic Speed Deflectometer, TSD is a rolling wheel deflectometer for network level bearing capacity measurement.",
                "images": [
                    {"url": "public/image/Asp038.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "Asphalt & Pavement",
                "category": "civil engineering",
                "productName": "Roughness Index/ Laser Profiling\n LaserProf",
                "desc": "LaserProf is an inertial profiler designed for quality control and supervision of highways. It enables the user to measure longitudinal profiles of any pavement surface. Derived results from the pavement profiles such as IRI can be calculated. LaserProf can be configured with Texture Sensors & GPS. The system is portable and easily mountable on any vehicle.LaserProf enables the measurement at normal traffic speed, with maximum speeds exceeding 150km/h. ",
                "shortDesc": "LaserProf is an inertial profiler designed for quality control and supervision of highways.",
                "images": [
                    {"url": "public/image/Asp039.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "Asphalt & Pavement",
                "category": "civil engineering",
                "productName": "Profilograph",
                "desc": "Profilograph is a specially designed system for transversal and longitudinal profile combined in one 3D profile. The system is equipped with high precision sensors, digital data acquisition and processing for highest possible result quality.\nThe system is configurable to meet the customer's requirements. It can either be configured as a standalone system or part of a larger multi-function vehicle. The Profiles can be synchronized with other measurement systems like GPS, Surface Imaging & ROW (Right of Way) imaging.",
                "shortDesc": "Profilograph is a specially designed system for transversal and longitudinal profile combined in one 3D profile.",
                "images": [
                    {"url": "public/image/Asp040.jpg", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "Asphalt & Pavement",
                "category": "civil engineering",
                "productName": "High-Low Detector (Rolling Straight Edge)",
                "desc": "Basic instrument to measure planeness of pavement surfaces, such as highways, airport runways, bridge decks, etc. Requires only one operator to detect, register, and dye mark high and low areas that need to be ground down or filled. Scraper blades keep wheels clean to maximize accuracy. Includes wheel stands for stabilizing during calibration, transport and storage. There is provision for checking wheel alignment. A steering handle is provided for easy positioning and movement, and provides a button for dye discharge. Marking dye is used to mark high and low areas on pavement.",
                "shortDesc": "Basic instrument to measure planeness of pavement surfaces, such as highways, airport runways, bridge decks, etc.",
                "images": [
                ],
                "featured": "false"
            },
            {
                "labName": "Asphalt & Pavement",
                "category": "civil engineering",
                "productName": "Surface/ ROW/ Subsurface Imaging Systems\n Surface Imaging",
                "desc": "Surface Imaging system features line scan camera technology for continuous undistorted images for conditional monitoring of highways. An odometer mounted on the wheel of the vehicle, through control electronics, triggers the camera at fixed intervals. Each line from the camera is added to the previous lines to make up one long continuous image. The continuous image is stored on a computer, tagged with time and distance identifying the precise position for each part of the image. Post processing software synchronize the image with other measurements made in the same vehicle based on the high precision odometer ",
                "shortDesc": "Surface Imaging system features line scan camera technology for continuous undistorted images for conditional monitoring of highways.",
                "images": [
                    {"url": "public/image/Asp041.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "Asphalt & Pavement",
                "category": "civil engineering",
                "productName": "Right-Of-Way (ROW) Imaging",
                "desc": "Right-Of-Way (ROW) Imaging The Right-of-Way Imaging (ROW) system records and stores images of the surrounding while driving at traffic speeds. The system can operate as a separate system or be a subsystem to a profiling system where it can be synchronized with the profile and with GPS data. The ROW system can function with one or multiple cameras. There is a wide range of digital cameras for optimum image quality and large flexibility and for the user there is selectable storage format for maximum flexibility.",
                "shortDesc": "Right-Of-Way (ROW) Imaging The Right-of-Way Imaging (ROW) system records and stores images of the surrounding while driving at traffic speeds.",
                "images": [
                    {"url": "public/image/Asp042.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "Asphalt & Pavement",
                "category": "civil engineering",
                "productName": "Subsurface Radar Imaging",
                "desc": "GroundVue3 is a multi-channel Ground Penetrating Radar that can be used to determine Pavement Layer Thickness, Pavement subsurface defects, Concrete/ RCC Integrity Testing, Foundation Assessment, Underground Utility detection, Archaeological applications among others. The system is capable for simultaneous multi-channel High Speed Orientation and is capable for towing behind or attachment to a survey vehicle. The system also features Auto-depth calibration option.",
                "shortDesc": "GroundVue3 is a multi-channel Ground Penetrating Radar that can be used to determine Pavement Layer Thickness, Pavement subsurface defects",
                "images": [
                    {"url": "public/image/Asp043.png", "caption": ""},
                ],
                "featured": "false"
            },
            
            {
                "labName": "Asphalt & Pavement",
                "category": "civil engineering",
                "productName": "Retro-reflectivity Measurement\n For Road Marking (Dynamic Retroreflectometers)",
                "desc": "The Dynamic Retroreflectometer measures the night visibility (RL) of road markings as seen by a vehicle driver driving with dipped headlight. This allows an objective measurement of retroreflection.\nFeatures :\n1.	Easy and fast attaching and removing of the measuring head of the vehicle.\n2.	The measuring head can be installated on either side of the car\n3.	Markings of different colours can be measured\n4.	Suitable for profile markings\n5.	Also suitable for stationary readings of road markings under continuous wetting using a rain simulator",
                "shortDesc": "he Dynamic Retroreflectometer measures the night visibility (RL) of road markings as seen by a vehicle driver driving with dipped headlight.",
                "images": [
                    {"url": "public/image/Asp044.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "Asphalt & Pavement",
                "category": "civil engineering",
                "productName": "Portable         Handheld         Retroreflectometer ",
                "desc": "The classic portable handheld retroreflectometer with memory for determination of night visibility (RL) and / or day visibility (Qd) of road markings as well as ambient temperature (°C/°F) and relative humidity (rH %) High resolution color touchscreen with excellent visibility under all lightconditions Ultrafast retroreflection measurement (RL and Qd) For all types of road markings In accordance with EN 1436 (RL/Qd), ASTM E 1710 (RL), ASTM E 2302 (Qd) and ASTM E 2177 (RL wet)",
                "shortDesc": "The classic portable handheld retroreflectometer with memory for determination of night visibility (RL) and / or day visibility",
                "images": [
                    {"url": "public/image/Asp045.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "Asphalt & Pavement",
                "category": "civil engineering",
                "productName": "For  Traffic  Signs  and  Reflective  Clothing ",
                "desc": "For Determination of night visibility (coefficient of retroreflec¬tion RA and R') of traffic signs, safety garments and other reflexive materials with measurement of three different observation angles at the same time.\nThe very first retroreflectometer with LED illumination system and with a 3.5” high resolution colour touchscreen with adjustable display inclination for excellent visibility under all light conditions also in bright sunlight.",
                "shortDesc": "For Determination of night visibility (coefficient of retroreflec¬tion RA and R') of traffic signs",
                "images": [
                    {"url": "public/image/Asp046.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "Concrete & Cement",
                "category": "civil engineering",
                "productName": "Concrete - \nAir Content, Air Void System Parameters",
                "desc": "The AVA (Air Void Analyzer) AVA is used to measure the air-void parameters (spacing factor and specific surface) of samples of fresh air-entrained concrete. Samples are taken after concrete is placed. With the AVA, the air-void structure is measured after the concrete is placed but while it is still fresh, thereby providing timely information of the spacing factor and the specific surface of the air void system in the cement paste of the in-place concrete. Timely information is important, because practice has shown that the air-void structure created by air entraining agents can change easily during construction; for example, due to the type and dosage of normal or high-range water-reducing admixtures, by changes in sources of cementitious materials, by pressure influences during pumping of concrete, by high hydrostatic pressure, or by over vibration. The testing time is 25 minutes or less. ",
                "shortDesc": "The AVA (Air Void Analyzer) AVA is used to measure the air-void parameters (spacing factor and specific surface) of samples of fresh air-entrained concrete. Samples are taken after concrete is placed.",
                "images": [
                    {"url": "public/image/Cpp001.png", "caption": ""},
                ],
                "featured": "true"
            },
            {
                "labName": "Concrete & Cement",
                "category": "civil engineering",
                "productName": "Concrete Air Meters",
                "desc": "Low maintenance air meter, which uses no moving parts inside the chamber. Pressure is released into the base by an external, brass, quick-release T-valve. The base is machined inside and out for easy cleaning. Chamber and cover are one solid component. No more bottom gasket leaks. Furnished with all necessary accessories for calibration and operation, plus plastic toolbox-style carrying case. Several types of air meters are available and information can be provided on request.",
                "shortDesc": "Low maintenance air meter, which uses no moving parts inside the chamber. Pressure is released into the base by an external, brass, quick-release T-valve.",
                "images": [
                    {"url": "public/image/Cpp002.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "Concrete & Cement",
                "category": "civil engineering",
                "productName": "Rapid Air",
                "desc": "RapidAir is an image analysis system for automatic determination of the air content in hardened concrete. The measured parameters of the air-void structure are total air content, spacing factor, and specific surface. The RapidAir measurement is done within 12 min for linear traverse analysis and within 30 min for modified point count. This should be compared with a time of 4 to 6 hours normally required for manual analysis using a light microscope. Graphical presentation of the air-void distribution and the raw data are also available",
                "shortDesc": "RapidAir is an image analysis system for automatic determination of the air content in hardened concrete.",
                "images": [
                    {"url": "public/image/Cpp003.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "Concrete & Cement",
                "category": "civil engineering",
                "productName": "Petro Planner",
                "desc": "The PetroPlaner is a state-of-the-art lapping and polishing machine for preparing lapped/polished plane surfaces for Air Void Analysis according to ASTM C457 or EN 480-11. Petrographic examination of polished fluorescent epoxy impregnated surfaces and polishing of thin sections for SEM / EDS examination.\nThe PetroPlaner is a simple and durable design with a low demand for maintenance and a long service life. Its compact design and low space requirements are useful for laboratory facilities.\nThe PetroPlaner grinding system, with its different grinding slurries, maximizes the success of such grinding and polishing jobs. The procedure can be supplemented by impregnation with an acetone based hardener that is applied before each grinding step. It is having simple & easy operation, with proven track record of 20 years of excellent results.",
                "shortDesc": "The PetroPlaner is a state-of-the-art lapping and polishing machine for preparing lapped/polished plane surfaces for Air Void Analysis according to ASTM C457 or EN 480-11.",
                "images": [
                    {"url": "public/image/Cpp004.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "Concrete & Cement",
                "category": "civil engineering",
                "productName": "Petrothin",
                "desc": "PetroThin is the ultimate thin section preparation machine. Thin sections are used extensively by petrographers to study the microstructure of concrete. The examination of thin sections of concrete and related materials is one of the most powerful methods for determining and characterizing the water-cement (w/c) ratio, mixture proportions, air-void structure and freezing of fresh concrete etc.",
                "shortDesc": "PetroThin is the ultimate thin section preparation machine. Thin sections are used extensively by petrographers to study the microstructure of concrete.",
                "images": [
                    {"url": "public/image/Cpp005.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "Concrete & Cement",
                "category": "civil engineering",
                "productName": "Linear Traverse Machine",
                "desc": "The Linear Traverse Machine is used to facilitate the counting of microscopic voids in concrete. Computer software controls the motorized specimen table with solid-state positioning motors. The software controls the traverse patterns and distances between measurements based on test sample parameters. Test results can be exported to Microsoft Excel for analysis and printing. Unit includes: Digital microscopic video camera with integral light source, computer-controlled motorized specimen table with solid-state positioning motors, software CD with controller and multi-adjustable camera stand. Computer is not included.",
                "shortDesc": "The Linear Traverse Machine is used to facilitate the counting of microscopic voids in concrete.",
                "images": [
                    {"url": "public/image/Cpp006.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "Concrete & Cement",
                "category": "civil engineering",
                "productName": "Penetration Testing - Concrete Pocket Penetrometer",
                "desc": "Lightweight, spring-reaction type concrete penetrometer for field and lab evaluation of the initial set of concrete mortar, based on ASTM C403. Penetration plunger has a 1/20 sq. in. tip area. Plunger is steadily pushed into the mortar to a 1 in. depth, as indicated on the shaft, at periodic time intervals. Penetrometer's calibrated range is 0-700 psi. Resistance in psi is indicated on the scale. The term “initial set” is the semi-hardened, partially hydrated condition of the concrete beyond which it can no longer be worked.",
                "shortDesc": "Lightweight, spring-reaction type concrete penetrometer for field and lab evaluation of the initial set of concrete mortar, based on ASTM C403.",
                "images": [
                    {"url": "public/image/Cpp007.jpg", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "Concrete & Cement",
                "category": "civil engineering",
                "productName": "Acme Penetrometer",
                "desc": "Hydraulic reaction-type apparatus for determining the setting time of concrete with slump greater than zero by testing mortar sieved from the concrete mixture. It also determines the effects of variables such as temperature, cement, mixture proportions, additions and admixtures upon the time of setting and hardening of concrete. The penetrometer's design makes it easy to operate, being more efficient, with a longer gear rack. All needles are one length so settings may remain the same.",
                "shortDesc": "Hydraulic reaction-type apparatus for determining the setting time of concrete with slump greater than zero by testing mortar sieved from the concrete mixture.",
                "images": [
                    {"url": "public/image/Cpp008.jpg", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "Concrete & Cement",
                "category": "civil engineering",
                "productName": "Heat of Hydration, Cracking Potential - HeatBox",
                "desc": "The purpose of the HeatBox is to determine the heat of hydration of a concrete mixture, which may be used as input information for a thermal analysis program. It is one of the components of a complete thermal control system. The HeatBox determines the heat of hydration of a concrete mixture based on the principle of semi adiabatic alorimetry. A specimen of fresh concrete is placed at the center of an insulated container. A portion of the total heat generated by hydration raises the temperature of the concrete specimen and a portion is absorbed by the container and transferred to surrounding air. The amount of heat absorbed by and transferred through the container can be established by appropriate temperature measurements of the insulation material or it can be determined by numerical simulation provided the thermal conductivity and heat capacity of the insulation are known.",
                "shortDesc": "The purpose of the HeatBox is to determine the heat of hydration of a concrete mixture, which may be used as input information for a thermal analysis program.",
                "images": [
                    {"url": "public/image/Cpp009.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "Concrete & Cement",
                "category": "civil engineering",
                "productName": "Be4Cast",
                "desc": "Be4Cast is an advanced software package for simulating temperature evolution and stress development in concrete structures during early-ages. The software allows modeling different construction methods for a given structure in order to arrive at an optimal solution for reducing the risk of early-age cracking due to thermal gradients and thermal shrinkage. Be4Cast is based on heat transfer in 3-dimensions, which permits more accurate simulation of heat transfer in a structural element of any shape. insulation are known.",
                "shortDesc": "Be4Cast is an advanced software package for simulating temperature evolution and stress development in concrete structures during early-ages.",
                "images": [
                    {"url": "public/image/Cpp010.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "Concrete & Cement",
                "category": "civil engineering",
                "productName": "Autogenous Shrinkage - Auto-Shrink",
                "desc": "The Auto-Shrink system measures the unrestrained autogenous shrinkage of a specimen of cement paste or mortar cured under sealed conditions (ASTM C1698, Test Method for Autogenous Strain of Cement Paste and Mortar). Auto-Shrink permits evaluation of the relative autogenous shrinkage potential of different cementitious systems. Excessive autogenous shrinkage may lead to microcracking that increases the permeability of concrete. The digital displacement gauge is fixed firmly to the frame with a blunted hex screw. The remote Control is mounted on the side of the gauge. A lock function for the remote control is provided. With Auto-Shrink, it is possible to measure the time dependent deformation of many different specimens simultaneously over periods of weeks or even years.",
                "shortDesc": "The Auto-Shrink system measures the unrestrained autogenous shrinkage of a specimen of cement paste or mortar cured under sealed conditions (ASTM C1698, Test Method for Autogenous Strain of Cement Paste and Mortar).",
                "images": [
                    {"url": "public/image/Cpp011.png", "caption": ""},
                ],
                "featured": "false"
            },
             {
                "labName": "Concrete & Cement",
                "category": "civil engineering",
                "productName": "Rheology and Self Consolidation Concrete - ICAR Rheometer",
                "desc": "The ICAR Rheometer provides, for the first time, a low-cost and simple to operate instrument that can be used for: Research and development to characterize the influence of new materials on concrete rheology. The ICAR Rheometer is designed to characterize the static yield stress, the dynamic yield stress and plastic viscosity of the concrete. The ICAR Rheometer software performs all the necessary functions like operates the driver, records the torque, computes test results, and stores data. For simplicity, the entire program is operated from a single screen. The user defines the test geometry and provides the test parameters to run the flow curve test. A simple press of the “Start” button initiates the tests, which takes less than 1 minute to complete.",
                "shortDesc": "The ICAR Rheometer provides, for the first time, a low-cost and simple to operate instrument that can be used for: Research and development to characterize the influence of new materials on concrete rheology.",
                "images": [
                    {"url": "public/image/Cpp012.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "Concrete & Cement",
                "category": "civil engineering",
                "productName": "J-Ring Test Set, Smooth Rod",
                "desc": "The J-ring test can be used to determine the passing ability of self-consolidating concrete. It is applicable for laboratory use in testing different concrete mixtures for passing ability or can be used in the field as a quality control test. Designed for durability, the set includes a slump cone, J-Ring with smooth rods, and steel base plate with engraved rings to measure flow distance.",
                "shortDesc": "The J-ring test can be used to determine the passing ability of self-consolidating concrete.",
                "images": [
                    {"url": "public/image/Cpp013.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "Concrete & Cement",
                "category": "civil engineering",
                "productName": "L-Box Flowability Test",
                "desc": "Method used to determine flow rates and passaibility of SCC in confined spaces, as well as an evaluation of filling, passing ability and segregation resistance. Test box is comprised of concrete reservoir, slide gate, an obstacle grid comprised of 3 bars and a test basin. Includes metal strike-off bar and instructions.\nMethod used to determine flow rates and passaibility of SCC in confined spaces, as well as an evaluation of filling, passing ability and segregation resistance. Test box is comprised of concrete reservoir, slide gate, an obstacle grid comprised of 3 bars and a test basin. Includes metal strike-off bar and instructions.",
                "shortDesc": "Method used to determine flow rates and passaibility of SCC in confined spaces, as well as an evaluation of filling, passing ability and segregation resistance.",
                "images": [
                    {"url": "public/image/Cpp014.jpg", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "Concrete & Cement",
                "category": "civil engineering",
                "productName": "V-Funnel Flowability Test",
                "desc": "Designed to evaluate the segregation resistance of self-consolidating concrete through the flowing speed from a funnel. Applicable to concrete with aggregates of 1 (25mm) maximum size. Stainless steel construction with 10L capacity. Upper edge is smooth and reinforced and the outflow orifice is equipped with a sealable valve. Includes polyethylene box to collect discharge and a 36 (914mm) long straight edge to level concrete prior to testing.",
                "shortDesc": "Designed to evaluate the segregation resistance of self-consolidating concrete through the flowing speed from a funnel.",
                "images": [
                    {"url": "public/image/Cpp015.jpg", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "Concrete & Cement",
                "category": "civil engineering",
                "productName": "Ball Penetration Apparatus (Kelly Ball)",
                "desc": "Used to test the consistency of concrete using the penetration of a half sphere into plastic concrete. Apparatus consists of 30 lb. (14kg) cylinder with hemispherically shaped bottom and handle. Stirrup or frame guides handle and acts as reference for measuring depth of penetration. Concrete may be tested as placed in the forms prior to any manipulation or in a suitable container.",
                "shortDesc": "Used to test the consistency of concrete using the penetration of a half sphere into plastic concrete.",
                "images": [
                    {"url": "public/image/Cpp016.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "Concrete & Cement",
                "category": "civil engineering",
                "productName": "Static Segregation Column Mold",
                "desc": "Used to determine the potential for static segregation of self-consolidating concrete by measuring the coarse aggregate content in the top and bottom portions of a cylindrical specimen. This test can be used as a quality control determination for levels of coarse aggregate segregation, especially for deep section applications like walls or columns. The column includes a stable base, three column sections and two sliding separator blades, which allow the column to be disassembled while capturing the concrete sample in the column sections.:- Used to determine the potential for static segregation of self-consolidating concrete by measuring the coarse aggregate content in the top and bottom portions of a cylindrical specimen. This test can be used as a quality control determination for levels of coarse aggregate segregation, especially for deep section applications like walls or columns. The column includes a stable base, three column sections and two sliding separator blades, which allow the column to be disassembled while capturing the concrete sample in the column sections.",
                "shortDesc": "Used to determine the potential for static segregation of self-consolidating concrete by measuring the coarse aggregate content in the top and bottom portions of a cylindrical specimen.",
                "images": [
                    {"url": "public/image/Cpp017.jpg", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "Concrete & Cement",
                "category": "civil engineering",
                "productName": "Strength - Early age, Maturity, Consistency",
                "desc": "LOK-TEST :- The LOK-TEST system is used to obtain a reliable estimate of the in-place strength of concrete in newly cast structures. LOK-TEST provides an accurate estimate of in-place strength because the peak pullout force has a well-defined correlation to compressive strength measured using standard cylinders or cubes. It is useful for determining whether in-place concrete strength is sufficient for early application of loads, such as due to formwork removal, application of prestressing. Determining whether the in-place strength is sufficient for terminating curing and thermal protection. Evaluating the quality of the critical cover layer protecting the reinforcement in the finished structure.",
                "shortDesc": "LOK-TEST :- The LOK-TEST system is used to obtain a reliable estimate of the in-place strength of concrete in newly cast structures.",
                "images": [
                    {"url": "public/image/Cpp018.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "Concrete & Cement",
                "category": "civil engineering",
                "productName": "Multi-Channel Maturity Meter",
                "desc": "Humboldt Maturity Meters provide a predictable strength determination of cast-in-place concrete based on ASTM standard C1074-98. These units utilize inexpensive, disposable, T-type thermocouple wire with quick-connect jacks, which can be embedded directly into a concrete structure to measure temperature at timed intervals. The H-2680 and H-2682 have four channels, all four channels may be used simultaneously and provide the maturity number calculation, instant readout and temperature history on a menu driven alphanumeric display.",
                "shortDesc": "Humboldt Maturity Meters provide a predictable strength determination of cast-in-place concrete based on ASTM standard C1074-98.",
                "images": [
                    {"url": "public/image/Cpp019.jpg", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "Concrete & Cement",
                "category": "civil engineering",
                "productName": "COMA-Meter (Concrete Maturity-Meter)",
                "desc": "The COMA-Meter (Concrete Maturity-Meter) is used to measure the maturity of newly cast concrete at a depth of 80 mm from the surface for estimating the compressive strength at an early age using a pre-established strength-maturity relationship. Timing of pullout testing with LOK-TEST for early-age strength measurement & evaluating the effective in-place curing temperature.",
                "shortDesc": "The COMA-Meter (Concrete Maturity-Meter) is used to measure the maturity of newly cast concrete at a depth of 80 mm from the surface for estimating the compressive strength at an early age using a pre-established strength-maturity relationship.",
                "images": [
                    {"url": "public/image/Cpp020.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "Concrete & Cement",
                "category": "civil engineering",
                "productName": "HeatWatch",
                "desc": "HeatWatch is a hardware and software system to measure the temperatures, determine temperature differences, and calculate maturity values at critical locations during hardening of concrete in a structure. HeatWatch also allows strength estimation at early ages, provided the strength-maturity relationship for the concrete mixture used in the structure has been established and entered into the HeatWatch computer program. HeatWatch can be used to verify predictions of temperature development in a newly cast member based on using a thermal analysis program.",
                "shortDesc": "HeatWatch is a hardware and software system to measure the temperatures, determine temperature differences, and calculate maturity values at critical locations during hardening of concrete in a structure.",
                "images": [
                    {"url": "public/image/Cpp021.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "Concrete & Cement",
                "category": "civil engineering",
                "productName": "TMS",
                "desc": "TMS is a system to measure temperatures (T), calculate maturity (M) values at critical locations and estimate in-place strength (S) at early ages, based on a provided strength-maturity relationship. TMS provides remote monitoring capabilities. Alarms stored in the TMS software alert the operator if preset temperatures or temperature differences have been exceeded. The TMS also permits automatic control of cooling or heating measures",
                "shortDesc": "TMS is a system to measure temperatures (T), calculate maturity (M) values at critical locations and estimate in-place strength (S) at early ages, based on a provided strength-maturity relationship.",
                "images": [
                    {"url": "public/image/Cpp022.png", "caption": ""},
                ],
                "featured": "false"
            },
             {
                "labName": "Concrete & Cement",
                "category": "civil engineering",
                "productName": "Consistency Vibrating Table Test ",
                "desc": "Used for determining the consistency of stiff to extremely dry concrete mixtures like those used in roller-compacted concrete mixtures. Density of the specimens is determined by determining the mass of the consolidated specimen and dividing by its volume. The unit is comprised of a vibrating table, which can be bolted to a floor or substantial base slab. The test mold is 9.5 x 7.75 ID with handles for easy movement and is locked into place on the base with positioning tabs and wing nuts.",
                "shortDesc": "Used for determining the consistency of stiff to extremely dry concrete mixtures like those used in roller-compacted concrete mixtures.",
                "images": [
                    {"url": "public/image/Cpp023.jpg", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "Concrete & Cement",
                "category": "civil engineering",
                "productName": "Concrete Strength Lab - Compression Testing Machines",
                "desc": "Hydraulic Compression Testing Machines are available in the capacities of 1500KN, 2000KN, 3000KN, 4000KN and 5000 kN. The choice of machine capacity should be made according to size and strength of specimens to be tested in the laboratory. However, since concrete is being produced with higher performance, it is always a good idea to choose a machine which has a higher capacity to that indicated by present day calculations. Dual ram machines are also available which allow testing with two different capacities: 2000/300 kN and 3000/300 kN. These allow higher accuracies in both higher and lower range of testing. The machines are available as simple digital display units OR fully computerized, strain controlled systems. Computerised models with feedback system and automatic load pace regulation enable the entire test to be controlled via the software.",
                "shortDesc": "Hydraulic Compression Testing Machines are available in the capacities of 1500KN, 2000KN, 3000KN, 4000KN and 5000 kN.",
                "images": [
                    {"url": "public/image/Cpp024.png", "caption": ""},
                ],
                "featured": "false"
            },
             {
                "labName": "Concrete & Cement",
                "category": "civil engineering",
                "productName": "High stiffness Frames ",
                "desc": "All of our machines are characterized by their high flexural rigidity on all three axes. This is particularly true of the four column models but is also a feature of our welded, enbloc frames thanks to the use of H or tubular section beams which, optimize the stiffness/weight ratio.",
                "shortDesc": "All of our machines are characterized by their high flexural rigidity on all three axes.",
                "images": [
                ],
                "featured": "false"
            },
            {
                "labName": "Concrete & Cement",
                "category": "civil engineering",
                "productName": "Test Platens ",
                "desc": "The test platens are made in compliance with the flatness, hardness and parallelism criteria of the latest international standards. Minimum surface hardness: 550 HV 30 or, upon request 600 HV (EN772/1). A wide range of testing platens for blocks and distance pieces are available as accessories.",
                "shortDesc": "The test platens are made in compliance with the flatness, hardness and parallelism criteria of the latest international standards.",
                "images": [
                ],
                "featured": "false"
            },
            {
                "labName": "Concrete & Cement",
                "category": "civil engineering",
                "productName": "Hydraulic power",
                "desc": "Automatic and computerized compression machines are actuated by means of control consoles that use our “Silent & Cold Power”technology. The semi-automatic machines still use our traditional, on-board power unit. The latter contains two pumps: a high capacity/low pressure pump used during fast approach procedure for securing the specimen is securely fitted between the test platens and a low capacity/high pressure pump that is used during the actual testing procedure.",
                "shortDesc": "Automatic and computerized compression machines are actuated by means of control consoles that use our “Silent & Cold Power”technology.",
                "images": [
                ],
                "featured": "false"
            },
            {
                "labName": "Concrete & Cement",
                "category": "civil engineering",
                "productName": "Universal Flexural Strength Testing Device",
                "desc": "For concrete beams with centre-point loading method and third-point loading method. The device comprises a lower element with two bearers (one fixed and one floating/rotating bearer). Adjustable span at 300 mm and at 450 mm, an upper element with two floating/rotating bearers fixed in a floating system. Adjustable span at 100 mm and at 150 mm. One of the upper bearers can be removed to perform the centre-point test. Indirect  tensile  stress  testing  device  for  cylinders  Ø  100,  150,  160  mm For the indirect tensile testing (“Brazilian” test) of concrete cylinders with diameters 100, 150 and 160 mm. The test requires the sample to be taken to failing point by the application of compressive force to the two generating lines of the cylinder. Indirect tensile stress testing device on soil-cement samples For the indirect tensile testing (“Brazilian” test) of soil cement specimens 6” x 7”",
                "shortDesc": "For concrete beams with centre-point loading method and third-point loading method. The device comprises a lower element with two bearers (one fixed and one floating/rotating bearer).",
                "images": [
                ],
                "featured": "false"
            },
             {
                "labName": "Concrete & Cement",
                "category": "civil engineering",
                "productName": "Compressometer-Extensometer",
                "desc": "Compressometer-extensometers are used to determine Poisson's ratio and Young's modulus during a compression test. This device contains a third, center yoke with a hinge dividing it into two equal segments. The middle yoke is hinged to permit rotation of the two segments of the yoke in the horizontal plane. Indicator gives deformation readings. Second indicator is furnished for compressometer section. Unit measures changes in length and diameter.",
                "shortDesc": "Compressometer-extensometers are used to determine Poisson's ratio and Young's modulus during a compression test.",
                "images": [
                    {"url": "public/image/Cpp025.png", "caption": ""},
                ],
                "featured": "false"
            },
             {
                "labName": "Concrete & Cement",
                "category": "civil engineering",
                "productName": "Compressometer",
                "desc": "The compressometer is used for evaluating the chord modulus of elasticity (Young's modulus) of concrete cylinders while undergoing compression testing. The Compressometer includes two cast aluminum-alloy yokes, mounting and central points, stainless steel control rods. Models are available with a dial gauge, as well as with a digital indicator or a LSCT transducer. Digital indicators and LSCT models can be used with data acquisition systems through the use of our miniLoggers.",
                "shortDesc": "The compressometer is used for evaluating the chord modulus of elasticity (Young's modulus) of concrete cylinders while undergoing compression testing.",
                "images": [
                    {"url": "public/image/Cpp026.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "Concrete & Cement",
                "category": "civil engineering",
                "productName": "Concrete Beam Tester",
                "desc": "Self-contained shock-proof portable concrete beam tester accurately and easily determines flexural strengths of 6 x 6 cross-section test beams. Hydraulically driven unit uses center-point loading method with continuous readings to the break and retains maximum reading to eliminate lost data. Gauge resets to zero for repeat tests. Lightweight aluminium unit has dual registration of modulus of rupture between 15,000 lbf. and 0-6,700 kgf.",
                "shortDesc": "Self-contained shock-proof portable concrete beam tester accurately and easily determines flexural strengths of 6 x 6 cross-section test beams.",
                "images": [
                    {"url": "public/image/Cpp027.jpg", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "Concrete & Cement",
                "category": "civil engineering",
                "productName": "Cylinder End Grinder",
                "desc": "This automatic cylinder end grinder quickly grinds specimen ends plane and parallel prior to compression tests. Test cylinders is easy to install on the table and requires no assembly. The machine is mounted on wheels for easy moving. Safe access to components allows for easy maintenance. The grinder's aluminum frame and stainless steel exterior ensure both resistance to corrosion and light weight.",
                "shortDesc": "This automatic cylinder end grinder quickly grinds specimen ends plane and parallel prior to compression tests. Test cylinders is easy to install on the table and requires no assembly.",
                "images": [
                    {"url": "public/image/Cpp028.jpg", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "Concrete & Cement",
                "category": "civil engineering",
                "productName": "Concrete Strength In-place/ NDT - LOK-TEST",
                "desc": "The LOK-TEST system is used to obtain a reliable estimate of the in-place strength of concrete in newly cast structures. LOK-TEST provides an accurate estimate of in-place strength because the peak pullout force has a well-defined correlation to compressive strength measured using standard cylinders or cubes. It is useful for determining whether in-place concrete strength is sufficient for early application of loads, such as due to formwork removal, application of prestressing. Determining whether the in-place strength is sufficient for terminating curing and thermal protection. Evaluating the quality of the critical cover layer protecting the reinforcement in the finished structure",
                "shortDesc": "The LOK-TEST system is used to obtain a reliable estimate of the in-place strength of concrete in newly cast structures.",
                "images": [
                ],
                "featured": "false"
            },
            {
                "labName": "Concrete & Cement",
                "category": "civil engineering",
                "productName": "CAPO (Cut and Pull Out) Test",
                "desc": "CAPO test measures the force required to pullout an embedded metal insert from a concrete specimen/ structure. The structure is subjected to a slowly applied load and measures the actual compressive strength properties of concrete. CAPO Test can help determine the in-situ strength of structure, strength of fire-damaged structures among others ensuring safety of the structure. Conforms to ASTM C900, BS 1881:2007, EN 12504-03 and is accredited by the Indian Road Congress (IRC) pullout an embedded metal insert from a concrete specimen/ structure. The structure is subjected to a slowly applied load and measures the actual compressive strength properties of concrete. CAPO Test can help determine the in-situ strength of structure, strength of fire-damaged structures among others ensuring safety of the structure. Conforms to ASTM C900, BS 1881:2007, EN 12504-03 and is accredited by the Indian Road Congress (IRC)",
                "shortDesc": "CAPO test measures the force required to pullout an embedded metal insert from a concrete specimen/ structure. The structure is subjected to a slowly applied load and measures the actual compressive strength properties of concrete.",
                "images": [
                    {"url": "public/image/Cpp029.png", "caption": ""},
                    {"url": "public/image/Cpp029a.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "Concrete & Cement",
                "category": "civil engineering",
                "productName": "Concrete Test Hammers",
                "desc": "Designed for non-destructive testing of concrete. The hammer is pressed against the concrete structure and the rebound values are displayed on a sliding scale. These values can then be somewhat correlated to compressive strength of concrete. Recording type and Silver/ Digital version are also available.",
                "shortDesc": "Designed for non-destructive testing of concrete. The hammer is pressed against the concrete structure and the rebound values are displayed on a sliding scale.",
                "images": [
                    {"url": "public/image/Cpp030.jpg", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "Concrete & Cement",
                "category": "civil engineering",
                "productName": "Crack Monitoring - CORECASE",
                "desc": "CORECASE is a portable light weight coring rig for quickly obtaining drilled cores that are accurate in diameter, have straight sides, and are perpendicular to the surface. In addition to determining in-place compressive strength, drilled cores can also be used for the Verification of flaws identified by NDT methods. Preparing a partially drilled core for conducting a pull-off test with BOND-TEST rapid chloride penetration bulk conductivity for petrographic analysis. The end result is a quickly drilled core that has a smooth surface, accurate diameter, and drilled perpendicular to the surface.",
                "shortDesc": "CORECASE is a portable light weight coring rig for quickly obtaining drilled cores that are accurate in diameter, have straight sides, and are perpendicular to the surface.",
                "images": [
                    {"url": "public/image/Cpp031.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "Concrete & Cement",
                "category": "civil engineering",
                "productName": "CMD (Crack Monitoring Device) ",
                "desc": "The purpose of CMD (Crack Monitoring Device) system is to monitor the opening and closing of a surface crack as well as relative lateral movement between the two sides of the crack as a function of time. With the CMD, a three-point rosette, in the shape of an equilateral triangle with 50-mm side lengths, is bonded to the surface. Two of the rosette points are positioned parallel to the crack, and the third one is positioned on the opposite side of the crack approximately half the distance to the base line. The measurements are made manually using a caliper, or they can be made electronically using displacement sensors (LVDTs). The CMD also has the option for remote monitoring from the office by means of a GSM cellular phone modem",
                "shortDesc": "The purpose of CMD (Crack Monitoring Device) system is to monitor the opening and closing of a surface crack as well as relative lateral movement between the two sides of the crack as a function of time.",
                "images": [
                    {"url": "public/image/Cpp032.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "Concrete & Cement",
                "category": "civil engineering",
                "productName": "Essential, Digital Crack Monitoring Kit",
                "desc": "This set contains all the essential components needed to set up a crack monitoring system using precision digital calipers. This kit includes a crack width gauge to measure the width of cracks prior to monitoring, a digital caliper, a pack of stainless steel discs and crack record sheets. Also included is an illustrated manual with full instructions, which describes best practice methods for using the calipers.",
                "shortDesc": "This set contains all the essential components needed to set up a crack monitoring system using precision digital calipers.",
                "images": [
                    {"url": "public/image/Cpp033.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "Concrete & Cement",
                "category": "civil engineering",
                "productName": "Professional, Digital Crack Monitoring Kit",
                "desc": "This set contains all that is needed to set up a crack monitoring system using precision calipers. This kit includes a crack width gauge to measure the width of cracks prior to monitoring, a digital caliper with data port, a pack of stainless steel discs, a pack of caliper marks, a pair of corner discs and crack record sheets",
                "shortDesc": "This set contains all that is needed to set up a crack monitoring system using precision calipers.",
                "images": [
                ],
                "featured": "false"
            },
            {
                "labName": "Concrete & Cement",
                "category": "civil engineering",
                "productName": "Concrete Crack Data Logger, Wifi ",
                "desc": "The wireless crack data logger provides a method to monitor cracks and linear displacements in concrete structures, featuring an integrated data logger, which measures both displacement and ambient temperature. This crack detector measures cracks by using a rotary, precision potentiometer, which is driven by the winding/unwinding of a stainless steel wire with an 80mm stroke. The wireless crack data logger downloads data to a PC via a wireless connection using a graphic user interface on a PC computer.",
                "shortDesc": "The wireless crack data logger provides a method to monitor cracks and linear displacements in concrete structures, featuring an integrated data logger, which measures both displacement and ambient temperature.",
                "images": [
                ],
                "featured": "false"
            },
            {
                "labName": "Concrete & Cement",
                "category": "civil engineering",
                "productName": "Integrity Testing and Condition Assessment - PUNDIT Lab  Ultrasonic  Pulse  Velocity  Test ",
                "desc": "The PUNDIT (Portable Ultrasonic Nondestructive Digital Indicating Tester) Lab is used to measure the propagation speed of a pulse of ultrasonic longitudinal stress waves. The ultrasonic pulse velocity (UPV) that is determined can be used for evaluating the uniformity of concrete within a structural member and he depth of surface-opening cracks. The PUNDIT Lab and the PUNDIT Lab+, both instruments are capable of investigating the structural integrity of concrete, ceramics and refractory, timber, and other materials",
                "shortDesc": "The PUNDIT (Portable Ultrasonic Nondestructive Digital Indicating Tester) Lab is used to measure the propagation speed of a pulse of ultrasonic longitudinal stress waves.",
                "images": [
                    {"url": "public/image/Cpp034.jpg", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "Concrete & Cement",
                "category": "civil engineering",
                "productName": "s'MASH -Impulse Response Test",
                "desc": "For a long time, users of NDT systems have wished for a rapid, easy to use method for rapid screening of the integrity of structures. The s'MASH impulse-response test system fulfills this wish. The idea is to quickly screen a structure for flaws and identify suspect areas for subsequent detailed investigation. With the s'MASH, rapid evaluation can be conducted for: Detecting voids beneath concrete slabs in highways, spillways, and floors. Detecting curling of slabs on ground. Locating delaminations and honeycombing in bridge decks, slabs, walls and large structures such as dams, chimney stacks, and silos. Detecting debonding of asphalt or concrete overlays and repair patches from concrete substrates.",
                "shortDesc": "or a long time, users of NDT systems have wished for a rapid, easy to use method for rapid screening of the integrity of structures.",
                "images": [
                    {"url": "public/image/Cpp035.jpg", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "Concrete & Cement",
                "category": "civil engineering",
                "productName": "DOCter - Impact Echo Test",
                "desc": "The DOCter is a versatile, portable system based on the impact-echo method. The impact-echo method is based on monitoring the periodic arrival of reflected stress waves and is able to obtain information on the depth of the internal reflecting interface or the thickness of a solid member. It can be used for measuring the thickness of pavements, asphalt overlays, slabs-on-ground and walls and detects the presence and depth of voids and honeycombing. It can be used for evaluating the quality of grout injection in post-tensioning cable ducts and detects debonding of overlays and patches. It is useful to measure the depth of surface-opening cracks and estimation of early-age strength development (with proper correlation).",
                "shortDesc": "or a long time, users of NDT systems have wished for a rapid, easy to use method for rapid screening of the integrity of structures.",
                "images": [
                    {"url": "public/image/Cpp036.jpg", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "Concrete & Cement",
                "category": "civil engineering",
                "productName": "EyeCon",
                "desc": "EyeCon is a portable hand-held instrument for flaw detection and thickness measurement. It is based on the ultrasonic pitch-catch method and uses an antenna composed of an array of dry point contact (DPC) transducers, which emit shear waves into the concrete. It is a dry point contact shear-wave transducers with ceramic wearing tip with rechargeable batteries. EyeCon can be used for measuring thickness and to detect of voids in grouted tendon ducts. Its useful in detection of voids, honeycombing in concrete members as well as the poor quality bond in overlays and repairs. EyeCon allows the user to display the signal as recorded originally (left side) or as a rectified signal.",
                "shortDesc": "EyeCon is a portable hand-held instrument for flaw detection and thickness measurement. It is based on the ultrasonic pitch-catch method and uses an antenna composed of an array of dry point contact (DPC) transducers, which emit shear waves into the concrete.",
                "images": [
                    {"url": "public/image/Cpp037.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "Concrete & Cement",
                "category": "civil engineering",
                "productName": "MIRA Tomographer",
                "desc": "The MIRA Tomographer is a state-of-the-art instrument for creating a three-dimensional (3-D) representation (tomogram) of internal defects that may be present in a concrete element. MIRA is based on the ultrasonic pitch-catch method and uses an antenna composed of an array of dry point contact (DPC) transducers, which emit shear waves into the concrete. MIRA has been used successfully for the thickness measurement, etection of voids in grouted tendon ducts. Detection of voids and honeycombing in concrete members and delaminations. Detection of voids behind tunnel linings and below slabs on ground..",
                "shortDesc": "The MIRA Tomographer is a state-of-the-art instrument for creating a three-dimensional (3-D) representation (tomogram) of internal defects that may be present in a concrete element.",
                "images": [
                    {"url": "public/image/Cpp038.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "Concrete & Cement",
                "category": "civil engineering",
                "productName": "DK-5000",
                "desc": "The DK-5000 determines the resonant frequency of prismatic or cylindrical specimens in accordance with the impact resonance method described in ASTM C215. The impact resonance method is a simple test that determines the resonant frequency very quickly. Resonant frequency testing can be used for Monitoring damage as a result of exposure to accelerated weathering, such as cycles of freezing and thawing in accordance with ASTM C666/C666M,",
                "shortDesc": "The DK-5000 determines the resonant frequency of prismatic or cylindrical specimens in accordance with the impact resonance method described in ASTM C215.",
                "images": [
                    {"url": "public/image/Cpp039.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "Concrete & Cement",
                "category": "civil engineering",
                "productName": "Covermeters / Rebar Locators - CoverMaster",
                "desc": "Covermeters are used to locate reinforcing bars and metal cable ducts in concrete structures, for measure the cover depth of reinforcemet, for estimating the size of reinforcing bar and to locate other metal objects embedded in concrete. CoverMaster instruments are based on the pulse-induction technique. A repetitive current pulse is applied to the coils in the search head. It includes standard search head, cable, carrying case, and instruction manual and rechargeable battery pack.",
                "shortDesc": "Covermeters are used to locate reinforcing bars and metal cable ducts in concrete structures, for measure the cover depth of reinforcemet, for estimating the size of reinforcing bar and to locate other metal objects embedded in concrete.",
                "images": [
                    {"url": "public/image/Cpp040.png", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "Concrete & Cement",
                "category": "civil engineering",
                "productName": "Profometer",
                "desc": "The Rebar Locator features a universal probe that allows you to measure both shallow and deep ranges at the push of a button. This gauge will locate, size and show bar orientation, as well as indicate concrete cover. In areas where adjacent and parallel bars affect readings, the operation can include a correction to isolate bars for more accurate diameter determinations. The operator can also include a correction factor for determining cover depth in congested bar arrangements. Highly accurate measurements and single-probe design makes this rebar locator an easy-to-use workhorse. Includes processing and report generation software.",
                "shortDesc": "The Rebar Locator features a universal probe that allows you to measure both shallow and deep ranges at the push of a button.",
                "images": [
                    {"url": "public/image/Cpp041.jpg", "caption": ""},
                ],
                "featured": "false"
            },
            {
                "labName": "Concrete & Cement",
                "category": "civil engineering",
                "productName": "Profoscope",
                "desc": "The Profoscope is a versatile, fully-integrated rebar detector and cover meter with a unique real-time rebar visualization, allowing the user to actually “SEE” the location of the rebar beneath the concrete surface to a maximum depth of 180 mm and can determine rebar diameter to a depth of 64mm. The Profoscope is a light device that allows the user to operate this rebar detector with one hand making the task of locating rebars a simple and efficient process.",
                "shortDesc": "The Profoscope is a versatile, fully-integrated rebar detector and cover meter with a unique real-time rebar visualization",
                "images": [
                    {"url": "public/image/Cpp042.png", "caption": ""},
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