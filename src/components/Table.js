import React from 'react';
import {TableHead, TableCell, TableRow, TableBody, TableContainer, Paper, Grid, Container} from '@mui/material';
import TableMUI from '@mui/material/Table'
import '../styles/index.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {blue} from '@mui/material/colors';
import Button from '@mui/material/Button';
import Chart from "./Chart";
import Deposits from "./Deposits";

const Table = (Id) => {
    console.log(Id[0],'hi21')
    // Rows hold an array of Objects
    const rows = []
    function createData(name, price, condition) {
      return { name, price, condition };
    }
    Id.map((i, index) =>
        rows.push(createData(i.seller.name, i.current_price, i.condition))
    );
    // PRIMARY AND SECONDARY BUTTONS
    const theme = createTheme({
        palette: {
            primary: {
                // Purple and green play nicely together.
                main: blue[500],
            },
            secondary: {
                // This is green.A700 as hex.
                main: '#11cb5f',
            },
        },
    });

  return (
      <div>
          {/*PRODUCT NAME AND STATUS*/}
          <ThemeProvider theme={theme}>
              <Button>Nintendo Switch</Button>
              <Button color="secondary">In-Stock</Button>
          </ThemeProvider>

          {/*CHART*/}
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
              <Grid container spacing={3}>
            <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                      p: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      height: 240,
                  }}
              >
                  <Chart />
                </Paper>
             </Grid>

              {/* Recent Deposits */}
              <Grid item xs={12} md={4} lg={3}>
                  <Paper
                      sx={{
                          p: 2,
                          display: 'flex',
                          flexDirection: 'column',
                          height: 200,
                      }}
                  >
                      <Deposits />
                  </Paper>
              </Grid>
              </Grid>
          </Container>

          {/*TABLE*/}
          <TableContainer component={Paper}>
              <TableMUI sx={{ minWidth: 200 }} aria-label="simple table">
                  <TableHead>
                      <TableRow>
                          <TableCell>Seller</TableCell>
                          <TableCell align="left">Price</TableCell>
                          <TableCell align="left">Condition</TableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>
                      {rows.map((row) => (
                          <TableRow
                              key={row.name}
                              sx={{ '&:last-child td, &:last-child th': { border: 0} }}
                          >
                              <TableCell component="th" scope="row">{row.name}</TableCell>
                              <TableCell align="left">$ {row.price}</TableCell>
                              <TableCell align="left">{row.condition}</TableCell>
                          </TableRow>
                      ))}
                  </TableBody>
              </TableMUI>
          </TableContainer>
      </div>

  );
}
export default Table
