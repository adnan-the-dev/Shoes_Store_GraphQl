import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { Badge, Typography } from '@mui/material';
import { toast } from 'react-toastify';
import { IoIosCloseCircle } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";



export default function AddToCart() {
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
        <Box
            sx={{ width: 500 }}
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
                                        src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
                                        alt="hsdfk"
                                        height={40}
                                        width={40}
                                    />
                                </Box>
                                <Box>
                                    <Typography sx={{
                                        fontSize: "14px",
                                        fontWeight: 600,
                                    }}>Smart Deal</Typography>
                                    <Typography sx={{
                                        fontSize: "12px",
                                        fontWeight: 500,
                                        color: "var(--color-text-secondary)",
                                        width: "max-content"
                                    }}>2 Small Pizzas,l Pasta (Fl) & 500 ML Soft Drink</Typography>

                                    {/* <Typography sx={{
                                        fontSize: "14px",
                                        fontWeight: 600,
                                    }}>Smart Deal</Typography>
                                    <Typography sx={{
                                        fontSize: "12px",
                                        fontWeight: 500,
                                        color: "var(--color-text-secondary)",
                                        width: "max-content"
                                    }}>2 Small Pizzas,l Pasta (Fl) & 500 ML Soft Drink</Typography>
                                    <Typography sx={{
                                        fontSize: "14px",
                                        fontWeight: 600,
                                    }}>Smart Deal</Typography>
                                    <Typography sx={{
                                        fontSize: "12px",
                                        fontWeight: 500,
                                        color: "var(--color-text-secondary)",
                                        width: "max-content"
                                    }}>2 Small Pizzas,l Pasta (Fl) & 500 ML Soft Drink</Typography>
                                    <Typography sx={{
                                        fontSize: "14px",
                                        fontWeight: 600,
                                    }}>Smart Deal</Typography>
                                    <Typography sx={{
                                        fontSize: "12px",
                                        fontWeight: 500,
                                        color: "var(--color-text-secondary)",
                                        width: "max-content"
                                    }}>2 Small Pizzas,l Pasta (Fl) & 500 ML Soft Drink</Typography>
                                    <Typography sx={{
                                        fontSize: "14px",
                                        fontWeight: 600,
                                    }}>Smart Deal</Typography>
                                    <Typography sx={{
                                        fontSize: "12px",
                                        fontWeight: 500,
                                        color: "var(--color-text-secondary)",
                                        width: "max-content"
                                    }}>2 Small Pizzas,l Pasta (Fl) & 500 ML Soft Drink</Typography> */}
                                </Box>
                            </Box>

                            {/* <Box sx={{
                                display: "flex",
                                gap: "10px",
                                alignItems: "center",
                                width: "40%",
                            }}>
                                <Box sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    width: "40px",
                                    height: "40px",
                                    border: "1px solid #ABBBC2",
                                    borderRadius: "7px",
                                    fontSize: "18px",
                                    fontWeight: 600,
                                    cursor: "pointer",
                                    color: "var(--color-text-primary)",
                                    backgroundColor: "var(--color-bg-primary)",
                                    userSelect: "none",
                                    "&:hover": {
                                        boxShadow: "0px 0px 10px 1px #cbd5e0",
                                        backgroundColor: "#393C49",
                                        border: "2px solid #fff",
                                        color: "#fff",
                                    },
                                }}
                                    onClick={() => toast.info("Pending")}
                                >
                                    -
                                </Box>
                                <Typography sx={{
                                    display: "inline-block",
                                    padding: 0,
                                    margin: "7px",
                                    color: "var(--color-button)",
                                    fontWeight: 700,
                                    fontSize: "16px",
                                }}>12</Typography>
                                <Box sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    width: "40px",
                                    height: "40px",
                                    border: "1px solid #ABBBC2",
                                    borderRadius: "7px",
                                    fontSize: "18px",
                                    fontWeight: 600,
                                    cursor: "pointer",
                                    color: "var(--color-text-primary)",
                                    backgroundColor: "var(--color-bg-primary)",
                                    userSelect: "none",
                                    "&:hover": {
                                        boxShadow: "0px 0px 10px 1px #cbd5e0",
                                        backgroundColor: "#393C49",
                                        border: "2px solid #fff",
                                        color: "#fff",
                                    },
                                }}
                                    onClick={() => toast.info("pending")}
                                >
                                    +
                                </Box>
                            </Box> */}

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
                                    Rs.1360
                                </Typography>
                                <Box sx={{
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
                                </Box>
                            </Box>
                        </Box>

                        <Box sx={{
                            border: "1px solid  #393C49",
                            margin: "0px 30px",
                        }} />
                    </Box>
                </Box>

                <Box sx={{
                    border: "1px solid  #393C49",
                    margin: "0px 30px",
                }} />
                <Box>
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
                        {/* <Button
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
                        </Button> */}
                        {/* <Button
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
                        </Button> */}
                    </Box>
                </Box>
            </Box>
        </Box>
    );

    return (
        <div>
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
        </div>
    );
}