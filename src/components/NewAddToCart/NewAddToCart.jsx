import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { Badge, Typography } from '@mui/material';
import { MdDelete } from "react-icons/md";

import { category } from '../arrayComponent/Array'
export default function NewAddToCart() {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        // <div style={{ width: '400px', backgroundColor: "#fff", display: 'flex', boxSizing: 'border-box', flexDirection: 'column', height: '100%' }}>
        //     <div style={{ display: 'flex', boxSizing: 'border-box', flexDirection: 'row', justifyContent: 'space-between', padding: '10px 15px', fontWeight: '600' }}>
        //         <span style={{ fontSize: '1rem', lineHeight: '1.5', fontWeight: '600', boxSizing: 'border-box' }}>Your Cart</span>
        //         <a style={{ margin: '0px', color: 'rgb(252, 185, 45)', cursor: 'pointer', boxSizing: 'border-box', textDecoration: 'underline rgba(252, 185, 45, 0.4)' }}>Clear cart</a>
        //     </div>

        //     <div style={{ maxHeight: '100%', margin: '4px 0px', boxSizing: 'border-box', overflowY: 'scroll', borderBottom: '1px solid rgba(0, 0, 0, 0.12)', display: 'flex', flexDirection: 'column', flex: '1 1 0%', padding: '10px 15px' }}>
        //         <div style={{ borderTopWidth: '1px', borderTopStyle: 'solid', padding: '6px 6px 6px 0', position: 'relative', boxSizing: 'border-box' }}>
        //             <div style={{position: 'relative', maxHeight: '60px', maxWidth: '60px', height: '35vw', width: '35vw', borderRadius: '4px', overflow: 'hidden', margin: '0 6px', boxSizing: 'border-box' }}>
        //                 <div style={{ boxSizing: 'border-box', display: 'block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0px', margin: '0px', padding: '0px', position: 'absolute', inset: '0px' }}>
        //                     <img style={{ boxSizing: 'border-box', position: 'absolute', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%', objectFit: 'contain' }} src="https://whitescastle.netlify.app/images/menu/crown-crust.jpg" alt="" />
        //                 </div>
        //                 <div style={{ display: 'flex', flexDirection: 'column', flex: '1 1 0%', boxSizing: 'border-box' }}>
        //                     <div style={{ margin: '2px', overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: '2',WebkitBoxOrient: 'vertical',fontSize: '16px',fontWeight: '700',color: '#111' }}>Mega Deal</div>
        //                     <div></div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <Box
            sx={{ width: 400 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            {/* cart */}


            <Box sx={{ width: "100%" }}>
                <Box sx={{
                    maxHeight: "500px",
                    height: "400px",
                    width: "100%",
                    overflowY: "auto",

                    "&::-webkit-scrollbar": {
                        width: "3px",
                    },
                    "&::-webkit-scrollbar-track": {
                        background: "#f1f1f1",
                        boxShadow: "inset 0 0 5px grey",
                        borderRadius: "10px",
                    },
                    "&::-webkit-scrollbar-thumb": {
                        background: "var(--color-text-secondary)",
                        borderRadius: "10px",
                        border: "2px solid #f1f1f1",
                    },
                }}>
                    {/* <Box sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    userSelect: "none",
                }}>
                    <Typography userSelect="none" fontSize="30px">
                        Cart Empty
                    </Typography>
                    <Typography userSelect="none">
                        Clck on Item to add to Cart
                    </Typography>
                    <FaLongArrowAltLeft
                        color='red'
                        fontSize={70}
                    />
                </Box> */}
                    {
                        category.map((item, i) => {
                            return (
                                <Box>
                                    <Box sx={{
                                        display: "flex",
                                        alignItems: 'center',
                                        justifyContent: "space-between",
                                        padding: " 10px 10px 10px 10px",
                                        userSelect: "none",
                                    }}>
                                        <Box sx={{
                                            display: "flex",
                                            justifyContent: "start",
                                            alignItems: "center",
                                            gap: "10px",
                                            padding: "3px 10px",
                                            width: "35%",
                                        }}>
                                            <Box sx={{
                                                display: "flex",
                                                alignItems: 'center',
                                                justifyContent: "space-between",
                                                padding: " 10px 10px 10px 10px",
                                                userSelect: "none",
                                            }}>
                                                <img
                                                    style={{ borderRadius: "50%" }}
                                                    priority="true"
                                                    src={item.img}
                                                    alt="hsdfk"
                                                    height={40}
                                                    width={40}
                                                />
                                            </Box>
                                            <Box>
                                                <Typography sx={{
                                                    fontSize: "14px",
                                                    fontWeight: 600,
                                                }}>{item.name}</Typography>
                                                <Typography sx={{
                                                    fontSize: "12px",
                                                    fontWeight: 500,
                                                    color: "var(--color-text-secondary)",
                                                    width: "max-content"
                                                }}>2 Small Pizzas,l Pasta (Fl) & 500 ML Soft Drink</Typography>
                                            </Box>
                                        </Box>
                                        <Box sx={{
                                            display: "flex",
                                            gap: "10px",
                                            alignItems: "center",
                                            justifyContent: "end",
                                            // width: "120px",
                                            width: "25%",
                                        }}>
                                            <Typography sx={{
                                                display: "inline-block",
                                                padding: 0,
                                                margin: "7px",
                                                color: "var(--color-button)",
                                                fontWeight: 700,
                                                fontSize: "16px",
                                            }}>
                                                Rs.{item.price}
                                            </Typography>
                                            {/* <Box sx={{
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                width: "40px",
                                                height: "40px",
                                                border: "2px solid #FF7CA3",
                                                borderRadius: "7px",
                                                fontSize: "25px",
                                                fontWeight: 600,
                                                cursor: "pointer",
                                                color: "#FF7CA3",
                                                transition: "0.2s all",
                                                "&:hover": {
                                                    boxShadow: "0px 0px 10px 1px #FF7CA3",
                                                    backgroundColor: "#FF7CA3",
                                                    border: "1px solid #fff",
                                                    color: "#fff",
                                                },
                                            }}
                                                backgroundColor='yellow'
                                                color='white'
                                                onClick={() => toast.success("Pending")}
                                            >
                                            </Box> */}
                                            <MdDelete size={50} />
                                        </Box>
                                    </Box>

                                    <Box sx={{
                                        border: "1px solid  #393C49",
                                        margin: "0px 30px",
                                    }} />
                                </Box>
                            )
                        })
                    }


                </Box>

                <Box sx={{
                    border: "1px solid  #393C49",
                    margin: "0px 30px",
                }} />
                {/* <Box>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        paddingX: "20px",
                        marginTop: "5px",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            paddingX: "20px",
                            marginTop: "5px",
                        }}
                    >
                        <Box sx={{
                            // border: "1px solid",
                            borderRadius: "50px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            // margin: "3px 3px",
                            padding: "0 10px",
                        }}>
                            <Typography sx={{
                                display: "inline-block",
                                padding: 0,
                                margin: "7px",
                                color: "var(--color-button)",
                                fontWeight: 700,
                                fontSize: "16px",
                            }}> Sub-Total:</Typography>

                            <Typography sx={{
                                fontSize: "16px",
                                fontWeight: 700,
                                color: "var(--color-text-secondary)",
                            }}>Rs.5000</Typography>
                        </Box>
                        <Box sx={{
                            // border: "1px solid",
                            borderRadius: "50px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            // margin: "3px 3px",
                            padding: "0 10px",
                        }}>
                            <Typography sx={{
                                display: "inline-block",
                                padding: 0,
                                margin: "7px",
                                color: "var(--color-button)",
                                fontWeight: 700,
                                fontSize: "16px",
                            }}>Discounted Total:</Typography>
                            <Typography sx={{
                                fontSize: "16px",
                                fontWeight: 700,
                                color: "var(--color-text-secondary)",
                            }}>
                                Rs.400
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "10px",
                        gap: "10px",
                    }}
                >
                    <Button
                        onClick={() => dispatch(clearCart())}
                        variant="contained"
                        style={{
                            borderRadius: 7,
                            backgroundColor: "var(--color-text-secondary)",
                            padding: "10px 30px",
                            fontSize: "14px",
                            fontWeight: 600,
                        }}
                    >
                        <Box marginRight={1}>Clear Cart</Box>
                        <IoIosCloseCircle fontSize={20} />
                    </Button>
                     <Button
                        onClick={addTransection}
                        variant="contained"
                        disabled={isDisabled}
                        style={{
                            borderRadius: 7,
                            backgroundColor: "#EA7C69",
                            padding: "10px 20px",
                            fontSize: "14px",
                            fontWeight: 600,
                        }}
                    >
                        {isDisabled ? (
                        <>
                            Processing
                            <CircularProgress size={24} color="secondary" />
                        </>
                         ) : (
                        <>
                            <Box marginRight={1}>Continue to Payment</Box>
                            <Badge sx={{
                                "& .MuiBadge-badge": {
                                    right: -3,
                                    top: 13,
                                    border: '2px solid',
                                    padding: "0 4px",
                                  },
                            }}
                                badgeContent='Hello'
                                color="secondary"
                            >
                                <MdOutlineShoppingCart />
                            </Badge>
                        </>
                        )}
                    </Button>
                </Box>
            </Box> */}
                <Box style={{ padding: '10px 15px', boxSizing: 'border-box' }}>
                    <Box style={{ fontSize: '14px', boxSizing: 'border-box', margin: '6px 0px', display: 'flex', justifyContent: 'space-between' }}>
                        <Typography style={{ fontSize: '14px', color: '#6f7274', fontWeight: '400', lineHeight: '1.5' }}>Subtotal</Typography>
                        <Typography style={{ color: 'rgb(131, 143, 155)' }}>Rs.4670</Typography>
                    </Box>
                    <Box style={{ fontSize: '14px', boxSizing: 'border-box', margin: '6px 0px', display: 'flex', justifyContent: 'space-between' }}>
                        <Typography style={{ fontSize: '14px', color: '#6f7274', fontWeight: '400', lineHeight: '1.5' }}>Delivery Charges</Typography>
                        <Typography style={{ color: 'rgb(131, 143, 155)' }}>Rs.0.00</Typography>
                    </Box>

                    <Box style={{ boxSizing: 'border-box', margin: '6px 0px', display: 'flex', justifyContent: 'space-between' }}>
                        <Typography style={{ fontSize: '1rem', color: 'rgb(36 40 43)', fontWeight: 'bold', lineHeight: '1.5' }}>Grand total</Typography>
                        <Typography style={{ fontSize: '1rem', fontWeight: 'bold', color: 'rgb(131, 143, 155)' }}>Rs.4670</Typography>
                    </Box>
                    <button style={{ fontSize: '14px', padding: '0px 16px', width: '100%', outLine: '0px', border: 'none', textDecoration: 'none', boxShadow: 'none', backgroundColor: 'rgb(248, 191, 68)', color: 'rgb(0, 0, 0)', borderRadius: '25px', lineHeight: '1.25', height: '42px', fontWeight: 'bold', textTransform: 'unset', cursor: 'pointer' }}>Checkout</button>
                </Box>
            </Box>
        </Box>
    );
    return (
        <>
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </>
    )
}
