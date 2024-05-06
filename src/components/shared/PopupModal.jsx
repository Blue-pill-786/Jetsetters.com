import { Box, Button, ButtonGroup, IconButton, Modal, Paper, Popover, Typography } from '@mui/material'
import { ImCross } from "react-icons/im";
import { IoCallSharp, IoMail } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import React from 'react'
import { useHref } from 'react-router-dom';

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


const PopupModal = ({ open, setOpen }) => {
    const handleClose = () => {
        setOpen(false);
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
                    className=" min-w-[200px] max-w-[400px]">
                    <button
                        className='absolute right-4 top-4 z-[1000]'
                        onClick={handleClose}
                    >
                        <ImCross className='text-[20px] opacity-30 hover:opacity-50 transition-opacity duration-150 ' />
                    </button>
                    <div>
                        <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h2" c
                            sx={{ fontWeight: "600", color: "#3380de" }}
                            fontWeight={700}
                            className='logo-head'
                        >
                            JETSETTERSS
                        </Typography>
                        <Typography
                            id="modal-modal-description"
                            sx={{ mt: 1, fontSize: "14px", lineHeight: "15px", color: "#8CABFF" }}
                        >

                            Skip the hassle and call us directly to book your flights
                        </Typography>
                    </div>


                    <div className='flex mt-8 gap-x-3 text-[] px-2 items-center justify-evenly'>
                        {/* <a href="tel:+">
                            <IconButton
                                size='large'
                                aria-label='Call'
                                color='primary'
                                className='group'
                            >
                                <IoCallSharp className='group-hover:scale-[1.1] md:text-[35px] transition-transform duration-300' />
                            </IconButton>
                        </a> */}
                        <a href="https://wa.me/+14088999705" target="_blank" rel="noopener noreferrer">
                            <IconButton
                                size='large'
                                aria-label='whatsapp'
                                sx={{ color: "#47d94a" }}
                                className='group'
                            >
                                <IoLogoWhatsapp className='group-hover:scale-[1.1] md:text-[35px] transition-transform duration-300' />
                            </IconButton>
                        </a>
                        <a href="mailto:bookings@jetsetterss.com">
                            <IconButton
                                size='large'
                                aria-label='mail'
                                sx={{ color: "#eb4545" }}
                                className='group'
                            >
                                <IoMail className='group-hover:scale-[1.1] md:text-[35px] transition-transform duration-300' />
                            </IconButton>
                        </a>
                    </div>
                </Box>
            </Paper>
        </Modal>
    )
}

export default PopupModal