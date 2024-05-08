import { Box, Button, ButtonGroup, IconButton, Modal, Paper, Popover, Typography } from '@mui/material'
import { ImCross } from "react-icons/im";
import { IoCallSharp, IoMail } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import React from 'react'
import TripPlane from '../../assets/gif/trip.gif';
import SkyPlane from '../../assets/gif/plane.gif';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    borderRadius: "15px",
    p: 4,
};


const PopupModal = ({ open, setOpen, firstPop, setFirstPop }) => {
    const handleClose = () => {
        setOpen(false);
        if (firstPop) {
            setFirstPop(false);
        }
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Paper elevation={8}>
                <Box
                    sx={style}
                    className="min-w-[200px] w-[300px] sm:w-[350px] relative">
                    <button
                        className='absolute right-4 top-4 z-[1000]'
                        onClick={handleClose}
                    >
                        <ImCross className='text-[20px] opacity-30 hover:opacity-50 transition-opacity duration-150 ' />
                    </button>
                    <div>
                        <div className='flex items-center gap-1'>
                            <Typography
                                id="modal-modal-title"
                                variant="h6"
                                component="h2"
                                fontSize={24}
                                fontWeight={600}
                                color={"#10439F"}
                                fontFamily={"Poetsen One"}
                                className='opacity-85'
                            >
                                JETSETTERS
                            </Typography>
                            {!firstPop && <img
                                src={TripPlane}
                                className='w-[30px] h-[25px]'
                                loading='lazy'
                            />}
                            {firstPop && <img
                                src={SkyPlane}
                                className='w-[30px] h-[25px]'
                                loading='lazy'
                            />}
                        </div>
                        <Typography
                            variant='h7'
                            className='text-neutral-600 text-base'
                        >
                            Find Cheapest Flight
                        </Typography>
                    </div>
                    <div className='flex mt-5 gap-x-3 items-center justify-between'>
                        <a href="tel:+14088999705">
                            <IconButton
                                size='large'
                                aria-label='Call'
                                color='primary'
                                className='group'
                            >
                                <IoCallSharp className='group-hover:scale-[1.1] md:text-[40px] transition-transform duration-300' />
                            </IconButton>
                        </a>
                        <a href="https://wa.me/+14088999705" target="_blank" rel="noopener noreferrer">
                            <IconButton
                                size='large'
                                aria-label='whatsapp'
                                sx={{ color: "#47d94a" }}
                                className='group'
                            >
                                <IoLogoWhatsapp className='group-hover:scale-[1.1] md:text-[40px] transition-transform duration-300' />
                            </IconButton>
                        </a>
                        <a href="mailto:bookings@jetsetterss.com">
                            <IconButton
                                size='large'
                                aria-label='mail'
                                sx={{ color: "#eb4545" }}
                                className='group'
                            >
                                <IoMail className='group-hover:scale-[1.1] md:text-[40px] transition-transform duration-300' />
                            </IconButton>
                        </a>
                    </div>
                    <div className='flex flex-col mt-5 gap-y-1 items-start text-neutral-700'>
                        <Typography variant='h7'>
                            Call on : <a href="https://wa.me/+14088999705" className='font-medium sm:ml-2'>
                                +1-408-899-9705
                            </a>
                        </Typography>
                        <Typography variant='h7'>
                            Mail on : <a href="mailto:bookings@jetsetterss.com" className='font-medium sm:ml-2'>
                                bookings@jetsetterss.com
                            </a>
                        </Typography>
                    </div>
                </Box>
            </Paper>
        </Modal>
    )
}

export default PopupModal