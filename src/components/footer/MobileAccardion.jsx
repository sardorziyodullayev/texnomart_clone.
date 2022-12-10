import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Footer.css';

export default function ControlledAccordions() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className="mobile__footer">
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{ background: '#333', px: 2, color: '#fff' }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>Kompaniya</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>B2B savdosi</Typography>
                    <Typography>Biz haqimizda</Typography>
                    <Typography>Yangiliklar va sharhlar</Typography>
                    <Typography>IMEI tekshirish</Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{ background: '#333', px: 2, color: '#fff' }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>Ma'lumot</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>Bepul yetkazib berish</Typography>
                    <Typography>Bonus tizimi</Typography>
                    <Typography>Texnomartda ishlash</Typography>
                    <Typography>Shaxsiy kabinet</Typography>
                    <Typography>Aloqa raqamlari</Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === 'panel3'}
                onChange={handleChange('panel3')}
                sx={{ background: '#333', px: 2, color: '#fff', mb: 5 }}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>Haridorga yordam</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>Muddatli to'lovga sotib olish</Typography>
                    <Typography>Mahsulotni qaytarish</Typography>
                    <Typography>Mahsulotlar uchun kafolat</Typography>
                    <Typography>Ko'p so'raladigan savollar</Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
