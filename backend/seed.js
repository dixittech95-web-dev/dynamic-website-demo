require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/product');

async function seedDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        const allProduct = [
            {
                labName: 'Automobile & I.C. Engine Lab',
                category: 'mechanical',
                shortDesc: 'The Automobile & IC Engine Laboratory provides students with hands-on, practical experience in the core principles of vehicle mechanics and thermal engineering.',
                featured: true,
                image: { url: '/public/image/automobile.jpg' },
                pdfpath: { url: '/public/pdf/mechanical engineering/AUTOMOBILE & I.C. ENGINE LAB.pdf' },
            },
            {
                labName: 'CNC Trainers',
                category: 'mechanical',
                shortDesc: 'The CNC Trainers provide students with comprehensive training in computer numerical control systems and their applications in modern manufacturing processes.',
                featured: false,
                image: { url: '/public/image/cnc.jpg' },
                pdfpath: { url: '/public/pdf/mechanical engineering/CNC TRAINERS.pdf' },
            },
            {
                labName: 'FLUID MECHANICS LAB',
                category: 'mechanical',
                shortDesc: 'The Fluid Mechanics Laboratory offers students a deep dive into the behavior of fluids under various conditions, essential for understanding hydraulic systems and aerodynamics.',
                featured: false,
                image: { url: '/public/image/fluid.jpg' },
                pdfpath: { url: '/public/pdf/mechanical engineering/FLUID MECHANICS LAB.pdf' },
            },
            {
                labName: 'Heat Transfer Lab',
                category: 'mechanical',
                shortDesc: 'The Heat Transfer Laboratory provides students with hands-on experience in understanding and applying principles of heat transfer in various engineering applications.',
                featured: false,
                image: { url: '/public/image/heat.jpg' },
                pdfpath: { url: '/public/pdf/mechanical engineering/HEAT TRANSFER LAB.pdf' },
            },
            {
                labName: 'Theory Of Machine Lab',
                category: 'mechanical',
                shortDesc: 'The Theory of Machines Laboratory provides students with hands-on experience in understanding and applying principles of mechanical systems and their dynamics.',
                featured: false,
                image: { url: '/public/image/theory.jpg' },
                pdfpath: { url: '/public/pdf/mechanical engineering/THEORY OF MACHINES LAB.pdf' },
            },
            {
                labName: 'Refrigeration & Air conditioning Lab',
                category: 'mechanical',
                shortDesc: 'The Refrigeration & Air Conditioning Laboratory provides students with hands-on experience in understanding and applying principles of refrigeration and air conditioning systems.',
                featured: false,
                image: { url: '/public/image/refrigeration.jpg'},
                pdfpath: { url: '/public/pdf/mechanical engineering/REFRIGERATION & AIR CONDITIONING LAB.pdf'},
            },
            {
                labName: 'Structural Mechanics Lab',
                category: 'mechanical',
                shortDesc: 'The Structural Mechanics Laboratory provides students with hands-on experience in understanding and applying principles of structural analysis and design.',
                featured: false,
                image: { url: '/public/image/structural.jpg'},
                pdfpath: { url: '/public/pdf/mechanical engineering/STRUCTURAL MECHANICS LAB.pdf'},
            },
            {
                labName: 'THERMODYNAMICS LAB',
                category: 'mechanical',
                shortDesc: 'The Thermodynamic Laboratory provides students with hands-on experience in understanding and applying principles of thermodynamics and heat transfer.',
                featured: false,
                image: { url: '/public/image/thermodynamic.jpg'},
                pdfpath: { url: '/public/pdf/mechanical engineering/THERMODYNAMIC LAB.pdf'},
            },
            {
                labName: 'ENGINEERING MODELS EQUIPMENTS & CHARTS',
                category: 'mechanical',
                shortDesc: 'The Engineering Models Laboratory provides students with hands-on experience in understanding and applying principles of engineering design and modeling.',
                featured: false,
                image: { url: '/public/image/engineering.jpg'},
                pdfpath: { url: '/public/pdf/mechanical engineering/ENGINEERING MODELS EQUIPMENTS & CHARTS.pdf'},
            },
            {
                labName: 'Asphalt & Pavement',
                category: 'civil engineering',
                shortDesc: 'The Asphalt & Pavement Laboratory provides students with hands-on experience in understanding and applying principles of asphalt mixing and pavement design.',
                featured: true,
                image: { url: '/public/image/asphalt.jpg' },
                pdfpath: { url: '/public/pdf/civil engineering/Asphalt & Pavement.pdf'},
            },
            {
                labName: 'Concrete & Cement',
                category: 'civil engineering',
                shortDesc: 'The Concrete & Cement Laboratory provides students with hands-on experience in understanding and applying principles of concrete mixing and cement design.',
                featured: false,
                image: { url: '/public/image/concrete.jpg' },
                pdfpath: { url: '/public/pdf/civil engineering/Concrete & Cement.pdf'},
            },
            {
                labName: 'Soil Field & Laboratory',
                category: 'civil engineering',
                shortDesc: 'The Soil Field & Laboratory provides students with hands-on experience in understanding and applying principles of soil mechanics and foundation design.',
                featured: false,
                image: { url: '/public/image/soil.jpg' },
                pdfpath: { url: '/public/pdf/civil engineering/Soil Field & Laboratry.pdf'},
            },
            {
                labName: 'Rock Field & Laboratory',
                category: 'civil engineering',
                shortDesc: 'The Rock Field & Laboratory provides students with hands-on experience in understanding and applying principles of rock mechanics and foundation design.',
                featured: false,
                image: { url: '/public/image/rock.jpg' },
                pdfpath: { url: '/public/pdf/civil engineering/Rock Field & Laboratry.pdf'},
            },
            {
                labName: 'Ground Penetrating Radars',
                category: 'civil engineering',
                shortDesc: 'The Ground Penetrating Radars laboratory provides students with hands-on experience in understanding and applying principles of ground-penetrating radar technology.',
                featured: false,
                image: { url: '/public/image/ground.jpg' },
                pdfpath: { url: '/public/pdf/civil engineering/Ground Penetrating Radars.pdf' },
            },
            {
                labName: 'Pile Testing',
                category: 'civil engineering',
                shortDesc: 'The Pile Testing laboratory provides students with hands-on experience in understanding and applying principles of pile design and testing.',
                featured: false,
                image: { url: '/public/image/pile.jpg' },
                pdfpath: { url: '/public/pdf/civil engineering/Pile Testing.pdf' },
            },
            {
                labName: 'Vibration & Geotechnical Monitor',
                category: 'civil engineering',
                shortDesc: 'The Vibration & Geotechnical Monitoring laboratory provides students with hands-on experience in understanding and applying principles of vibration analysis and geotechnical monitoring.',
                featured: false,
                image: { url: '/public/image/vibration.jpg' },
                pdfpath: { url: '/public/pdf/civil engineering/Vibration & Geotechnical Monitoring.pdf' },
            },
            {
                labName: 'Geotechnical Modeling Software',
                category: 'civil engineering',
                shortDesc: 'The Geotechnical Modeling Software laboratory provides students with hands-on experience in understanding and applying principles of geotechnical modeling and simulation.',
                featured: false,
                image: { url: '/public/image/geotechnical.jpg' },
                pdfpath: { url: '/public/pdf/civil engineering/Geotechnical Modeling Software.pdf' },
            },
            {
                labName: 'Communication Lab',
                category: 'Electrical Engineering',
                shortDesc: 'The Communication Lab provides students with hands-on experience in understanding and applying principles of communication systems and networks.',
                featured: true,
                image: { url: '/public/image/communication.jpg' },
                pdfpath: { url: '/public/pdf/electrical engineering/Communication Lab.pdf' },
            },
            {
                labName: 'Fibre Optic Lab',
                category: 'Electrical Engineering',
                shortDesc: 'The Fibre Optic Lab provides students with hands-on experience in understanding and applying principles of fibre optic communication systems.',
                featured: false,
                image: { url: '/public/image/fibre.jpg' },
                pdfpath: { url: '/public/pdf/electrical engineering/Fibre Optic Trainers Lab.pdf' },
            },
            {
                labName: 'Control Lab',
                category: 'Electrical Engineering',
                shortDesc: 'The Control Systems Lab provides students with hands-on experience in understanding and applying principles of control systems and automation.',
                featured: false,
                image: { url: '/public/image/control.jpg' },
                pdfpath: { url: '/public/pdf/electrical engineering/Control System Lab.pdf' },
            },
            {
                labName: 'Digital/Analog LAb',
                category: 'Electrical Engineering',
                shortDesc: 'The Digital Analog Lab provides students with hands-on experience in understanding and applying principles of digital and analog circuits.',
                featured: false,
                image: { url: '/public/image/digital.jpg' },
                pdfpath: { url: '/public/pdf/electrical engineering/DigitalAnalog Trainer Lab.pdf' },
            },
            {
                labName: 'Microprocessor/Microcontroller Lab',
                category: 'Electrical Engineering',
                shortDesc: 'The Microprocessor/Microcontroller Lab provides students with hands-on experience in understanding and applying principles of microprocessor and microcontroller systems.',
                featured: false,
                image: { url: '/public/image/microprocessor.jpg' },
                pdfpath: { url: '/public/pdf/electrical engineering/MicroprocessorMicrocontroller Lab.pdf' },
            },
            {
                labName: 'PCB Design Lab',
                category: 'Electrical Engineering',
                shortDesc: 'The PCB Design Lab provides students with hands-on experience in understanding and applying principles of printed circuit board design.',
                featured: false,
                image: { url: '/public/image/pcb.jpg' },
                pdfpath: { url: '/public/pdf/electrical engineering/PCB Design Lab.pdf' },
            },
            {
                labName: 'Instrumentation Lab',
                category: 'Electrical Engineering',
                shortDesc: 'The Instrumentation Lab provides students with hands-on experience in understanding and applying principles of instrumentation and measurement systems.',
                featured: false,
                image: { url: '/public/image/instrumentation.jpg' },
                pdfpath: { url: '/public/pdf/electrical engineering/Instrumentation Lab.pdf' },
            },
            {
                labName: 'Medical Equipment',
                category: 'medical',
                shortDesc: 'The Medical Equipment Lab provides students with hands-on experience in understanding and applying principles of medical devices and equipment.',
                featured: false,
                image: { url: '/public/image/medical.jpg' },
                pdfpath: { url: '/public/pdf/medical/Medical Equipment Lab.pdf' },
            },
             {
                labName: 'Sales-Services-Spare',
                category: 'medical',
                shortDesc: 'The Sales-Services-Spare Lab provides students with hands-on experience in understanding and applying principles of medical device sales, services, and spare parts management.',
                featured: false,
                image: { url: '/public/image/sale.jpg' },
                pdfpath: { url: '/public/pdf/medical/sales spare Lab.pdf' },
            },
        ];

        await Product.deleteMany({});
        console.log('Old data deleted!');
        await Product.insertMany(allProduct);
        console.log('Database Seeded!');
    } catch (err) {
        console.error('Error in seeding:', err);
    } finally {
        process.exit();
    }
}

seedDB();