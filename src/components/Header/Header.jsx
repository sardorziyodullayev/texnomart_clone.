import React, { useState, forwardRef } from 'react';
import { Formik } from 'formik';
import {
    AppBar,
    Container,
    InputBase,
    Typography,
    Box,
    Grid,
    Dialog,
    Tab,
    TextField,
    Button,
    Snackbar,
    Badge
} from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import Select from 'react-select';
import {
    MicNone,
    Search,
    Inventory,
    PersonOutlineOutlined,
    CompareArrows,
    FavoriteBorder,
    LocationOnOutlined,
    Widgets,
    BoltOutlined,
    LocalFireDepartment,
    ShoppingCart
} from '@mui/icons-material';
import './Header.css';
import app from '../../firebase-config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import MuiAlert from '@mui/material/Alert';
import { useSelector } from 'react-redux';

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const options = [
    { value: 'barcha kategoriyalar', label: 'barcha kategoriyalar' },
    { value: 'maishiy texnika', label: 'maishiy texnika' },
    { value: 'ofis jihozlari', label: 'ofis jihozlari' },
    { value: 'oshxona uchun texnika', label: 'oshxona uchun texnika' },
    { value: 'uy uchun idishlar', label: 'uy uchun idishlar' },
    {
        value: 'avtomobil uchun mahsulotlar',
        label: 'avtomobil uchun mahsulotlar'
    },
    { value: 'iqlim texnikasi', label: 'iqlim texnikasi' },
    {
        value: 'televizorlar va telekartalar',
        label: 'televizorlar va telekartalar'
    },
    { value: 'telefonlar va gadjetlar', label: 'telefonlar va gadjetlar' },
    { value: 'kompyuter texnikasi', label: 'kompyuter texnikasi' },
    { value: 'audiotexnika va hi-fi', label: 'audiotexnika va hi-fi' },
    { value: 'gozallik va salomatlik', label: 'gozallik va salomatlik' },
    { value: 'bolalar uchun mahsulotlar', label: 'bolalar uchun mahsulotlar' },
    { value: 'rasmlar va videolar', label: 'rasmlar va videolar' },
    {
        value: 'sport va sevimli mashgulotlar konsollari',
        label: 'sport va sevimli mashgulotlar konsollari'
    },
    { value: 'maishiy mahsulotlar', label: 'maishiy mahsulotlar' },
    { value: 'aksiya va chegirmalar', label: 'aksiya va chegirmalar' }
];

const headerBottomList = [
    { label: 'Sariq hafta', icon: <BoltOutlined sx={{ color: '#FFC400' }} /> },
    { label: 'Aksiyalar', icon: <LocalFireDepartment sx={{ color: '#fb5252' }} /> },
    { label: 'Smartfonlar' },
    { label: 'Muzlatgichlar' },
    { label: 'Changyutgichlar' },
    { label: 'Havo sovutgichlar' },
    { label: 'Televizorlar' },
    { label: 'Barcha kategoriyalar' }
];

const headerRight = [
    { label: 'Buyurtma holati', icon: <Inventory sx={{ color: '#555', cursor: 'pointer' }} /> },
    { label: 'Kirish', icon: <PersonOutlineOutlined sx={{ color: '#555', cursor: 'pointer' }} /> },
    { label: 'Taqqoslash', icon: <CompareArrows sx={{ color: '#555', cursor: 'pointer' }} /> },
    { label: 'Sevimlilar', icon: <FavoriteBorder sx={{ color: '#555', cursor: 'pointer' }} /> },
    { label: 'Savatcha', icon: <ShoppingCart sx={{ color: '#555', cursor: 'pointer' }} /> }
];

const selectStyles = {
    container: (provided) => ({
        ...provided,
        width: 'auto',
        textTransform: 'capitalize',
        fontSize: '12px'
    }),
    menu: (provided) => ({
        ...provided,
        textTransform: 'capitalize',
        fontSize: '12px'
    }),
    menuList: (provided) => ({
        ...provided,
        color: '#000',
        '::-webkit-scrollbar': {
            width: '8px',
            backgroundColor: 'transparent'
        },
        '::-webkit-scrollbar-thumb': {
            backgroundColor: '#d5d5d5',
            borderRadius: '4px'
        }
    }),
    control: (provided) => ({
        ...provided,
        border: 'none',
        boxShadow: 'none',
        borderRadius: '7px',
        backgroundColor: '#F7F7F7'
    }),
    option: (provided, { isFocused }) => ({
        ...provided,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: isFocused ? '#fef3cc' : 'transparent',
        color: '#000',
        padding: '10px 20px'
    })
};

const Header = () => {
    const count = useSelector((i) => i.count);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('1');
    const [openSnackbar, setOpenSnackbar] = React.useState({ isOpen: false, text: '', severity: 'info' });

    const handleClickSnackbar = () => {
        setOpenSnackbar((prev) => ({ ...prev, isOpen: false }));
    };

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackbar((prev) => ({ ...prev, isOpen: false }));
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={openSnackbar.isOpen}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
            >
                <Alert onClose={handleCloseSnackbar} severity={openSnackbar.severity} sx={{ width: '100%' }}>
                    {openSnackbar.text}
                </Alert>
            </Snackbar>
            <Dialog open={open} onClose={handleClose}>
                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={value}>
                        <Box
                            sx={{
                                '.MuiTabs-indicator': {
                                    display: 'none'
                                }
                            }}
                        >
                            <TabList
                                onChange={handleChange}
                                aria-label="lab API tabs example"
                                sx={{
                                    width: '100%',
                                    background: '#f7f7f7',
                                    '.MuiTab-textColorInherit': { color: '#000', textTransform: 'inherit', fontWeight: 600, fontSize: 16 },
                                    '.MuiTab-textColorPrimary': { color: '#000', textTransform: 'inherit', fontWeight: 600, fontSize: 16 },
                                    '.MuiTab-textColorSecondary': {
                                        color: '#000',
                                        textTransform: 'inherit',
                                        fontWeight: 600,
                                        fontSize: 16
                                    },
                                    '.Mui-selected': {
                                        background: '#fff',
                                        color: '#000'
                                    }
                                }}
                            >
                                <Tab label="Kirish" value="1" sx={{ p: 3 }} />
                                <Tab label="Ro'yxatdan o'tish" value="2" sx={{ p: 3 }} />
                            </TabList>
                        </Box>
                        <TabPanel value="1" sx={{ p: 4 }}>
                            <Formik
                                initialValues={{ email: '', password: '' }}
                                validate={(values) => {
                                    const errors = {};
                                    if (!values.email) {
                                        errors.email = '';
                                    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                                        errors.email = '';
                                    }
                                    return errors;
                                }}
                                onSubmit={(values, { setSubmitting }) => {
                                    (async () => {
                                        const auth = getAuth(app);
                                        signInWithEmailAndPassword(auth, values.email, values.password)
                                            .then((userCredential) => {
                                                setOpenSnackbar({
                                                    isOpen: true,
                                                    text: 'Tizimga muvaffaqiyatli kirildi!',
                                                    severity: 'success'
                                                });
                                            })
                                            .catch((error) => {
                                                const errorCode = error.code;
                                                const errorMessage = error.message;
                                            });
                                    })();
                                    setSubmitting(false);
                                }}
                            >
                                {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                                    <form onSubmit={handleSubmit}>
                                        <TextField
                                            fullWidth
                                            variant="outlined"
                                            name="email"
                                            label="Email"
                                            type="email"
                                            required
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                            sx={{ mb: 3 }}
                                        />
                                        {errors.email && touched.email && errors.email}
                                        <TextField
                                            fullWidth
                                            variant="outlined"
                                            name="password"
                                            label="Password"
                                            type="password"
                                            required
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.password}
                                            sx={{ mb: 3 }}
                                        />
                                        {errors.password && touched.password && errors.password}
                                        <Button
                                            type="submit"
                                            disabled={isSubmitting}
                                            variant="contained"
                                            fullWidth
                                            size="large"
                                            sx={{
                                                boxShadow: 'none',
                                                background: '#FFC400',
                                                color: '#000',
                                                textTransform: 'initial',
                                                fontWeight: '700',
                                                '&:hover': { background: '#FFC400', boxShadow: 'none' }
                                            }}
                                        >
                                            Login orqali o'tish
                                        </Button>
                                    </form>
                                )}
                            </Formik>
                        </TabPanel>
                        <TabPanel value="2" sx={{ p: 4 }}>
                            <Formik
                                initialValues={{ email: '', password: '' }}
                                validate={(values) => {
                                    const errors = {};
                                    if (!values.email) {
                                        errors.email = '';
                                    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                                        errors.email = '';
                                    }
                                    return errors;
                                }}
                                onSubmit={(values, { setSubmitting }) => {
                                    (async () => {
                                        const auth = getAuth(app);
                                        console.log(values.email, values.password);
                                        await createUserWithEmailAndPassword(auth, values.email, values.password)
                                            .then((userCredential) => {
                                                setOpenSnackbar({
                                                    isOpen: true,
                                                    text: "Ro'yxatdan muvaffaqiyatli o'tildi!",
                                                    severity: 'info'
                                                });
                                            })
                                            .catch((error) => {
                                                setOpenSnackbar({
                                                    isOpen: true,
                                                    text: 'Bu elektron pochta tizimda mavjud!',
                                                    severity: 'error'
                                                });
                                                const errorCode = error.code;
                                                const errorMessage = error.message;
                                            });
                                    })();
                                    setSubmitting(false);
                                }}
                            >
                                {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                                    <form onSubmit={handleSubmit}>
                                        <TextField
                                            fullWidth
                                            variant="outlined"
                                            name="email"
                                            label="Email"
                                            type="email"
                                            required
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                            sx={{ mb: 3 }}
                                        />
                                        {errors.email && touched.email && errors.email}
                                        <TextField
                                            fullWidth
                                            variant="outlined"
                                            name="password"
                                            label="Password"
                                            type="password"
                                            required
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.password}
                                            sx={{ mb: 3 }}
                                        />
                                        {errors.password && touched.password && errors.password}
                                        <Button
                                            type="submit"
                                            disabled={isSubmitting}
                                            variant="contained"
                                            fullWidth
                                            size="large"
                                            sx={{
                                                boxShadow: 'none',
                                                background: '#FFC400',
                                                color: '#000',
                                                textTransform: 'initial',
                                                fontWeight: '700',
                                                '&:hover': { background: '#FFC400', boxShadow: 'none' }
                                            }}
                                        >
                                            Ro'yxatdan o'tish
                                        </Button>
                                    </form>
                                )}
                            </Formik>
                        </TabPanel>
                    </TabContext>
                </Box>
            </Dialog>
            <AppBar position="static" sx={{ background: '#333', py: 1, display: { xs: 'none', md: 'none', lg: 'flex' } }}>
                <Container maxWidth="xl">
                    <Grid container sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Grid item display="flex" alignItems="center">
                            <LocationOnOutlined />
                            <Typography variant="caption" mt={0.5}>
                                Toshkent
                            </Typography>
                        </Grid>
                        <Grid item display="flex" container columnSpacing={4} width="max-content">
                            <Grid item>
                                <Typography variant="caption">Bizning do'konlarimiz</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="caption" sx={{ background: '#666', borderRadius: '5px', p: 0.4 }}>
                                    B2B savdosi
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="caption">Muddatli to'lovga sotib olish</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="caption">To'lov usullari</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="caption">Mahsulotlar uchun kafolat</Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant="caption">Aloqa markazi: +99871 209 99 44</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="caption">O'Z</Typography>
                        </Grid>
                    </Grid>
                </Container>
            </AppBar>
            <AppBar enableColorOnDark className="appBar" position="sticky">
                <Container maxWidth="xl" className="container">
                    <Typography variant="h4" className="siteName" sx={{ display: { xs: 'none', md: 'block' } }}>
                        texnomart*
                    </Typography>
                    <Box className="inputBar" width={true} sx={{ flex: { xs: 1, md: 0.9 } }}>
                        <Box className="selectAndInput" sx={{ width: { md: '510px', lg: '530px' } }}>
                            <Select
                                components={{
                                    IndicatorSeparator: () => null
                                }}
                                openMenuOnFocus={true}
                                defaultValue={options}
                                options={options}
                                isSearchable={false}
                                styles={selectStyles}
                            />
                            <InputBase sx={{ ml: 1.5, flex: 1 }} placeholder="" />
                            <Box className="mic">
                                <MicNone />
                            </Box>
                        </Box>
                        <Box className="search" sx={{ display: { xs: 'none !important', md: 'flex !important' } }}>
                            <Search />
                        </Box>
                    </Box>
                    <Grid container columnSpacing={2} className="headerIconsContainer" sx={{ display: { xs: 'none', md: 'flex' } }}>
                        {headerRight.map((e, i) => (
                            <>
                                {i === 4 ? (
                                    <Grid key={i} item className="headerIconsCard" onClick={() => e.label === 'Kirish' && setOpen(true)}>
                                        <Badge badgeContent={count} color="warning">
                                            {e.icon}
                                        </Badge>
                                        <Typography
                                            variant="caption"
                                            color="#555"
                                            fontWeight={600}
                                            sx={{ display: { xs: 'none', md: 'none', lg: 'block' } }}
                                        >
                                            {e.label}
                                        </Typography>
                                    </Grid>
                                ) : (
                                    <Grid key={i} item className="headerIconsCard" onClick={() => e.label === 'Kirish' && setOpen(true)}>
                                        {e.icon}
                                        <Typography
                                            variant="caption"
                                            color="#555"
                                            fontWeight={600}
                                            sx={{ display: { xs: 'none', md: 'none', lg: 'block' } }}
                                        >
                                            {e.label}
                                        </Typography>
                                    </Grid>
                                )}
                            </>
                        ))}
                    </Grid>
                </Container>
            </AppBar>
            <AppBar color="inherit" position="static" sx={{ py: 1, background: '#F7F7F7', display: { xs: 'none', md: 'flex' } }}>
                <Container maxWidth="xl" className="container">
                    <Grid container columnSpacing={3} alignItems="center" justifyContent="space-between" wrap="nowrap">
                        <Grid item>
                            <Grid
                                sx={{
                                    display: 'flex',
                                    borderRadius: '8px',
                                    py: 1.5,
                                    px: 2,
                                    color: '#000',
                                    textTransform: 'capitalize',
                                    background: '#FFC400',
                                    boxShadow: 'none'
                                }}
                            >
                                <Widgets />
                                <Typography variant="body1" ml={1} fontWeight={600}>
                                    Katalog
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item container columnSpacing={3} width="max-content">
                            {headerBottomList.map((e, i) => (
                                <Grid item key={i}>
                                    <Grid
                                        display="flex"
                                        alignItems="center"
                                        sx={{
                                            background: i === 0 ? '#000' : 'inherit',
                                            p: i === 0 ? '0 10px' : 0,
                                            borderRadius: '10px'
                                        }}
                                    >
                                        {e.icon}
                                        <Typography
                                            variant="overline"
                                            letterSpacing={0}
                                            fontWeight={700}
                                            sx={{ color: i === 0 ? '#FFC400' : '#373f41' }}
                                        >
                                            {e.label}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Container>
            </AppBar>
        </>
    );
};

export default Header;
