import React from "react";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


// color: '#E93E3A',
function DonateContent(){
    
  // Use the useMediaQuery hook to check the screen width
  const isMobile = useMediaQuery('(max-width: 768px)'); // You can adjust the breakpoint as needed   
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardHolderName: '',
    expirationDate: '',
    cvv: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckout = () => {
    // Add your payment processing logic here using Visa API or a server.
  };
   
  const [phoneNumber, setPhoneNumber] = useState('');
  const [amount, setAmount] = useState('');

  const handlePayment = () => {
    // Implement mobile money payment processing logic here.
  };

  return (
    <div>
      <Grid container spacing={isMobile ? 1 : 2}>
        {/* First column */}
        {/* first grid first & pay with visa */}
        <Grid item xs={12} sm={6} md={6} lg={6} style={{justifyContent:'center',  padding: isMobile ? "20px" : "120px"}}>
        <Card className="custom-card"  style={{width:'500px', height:'410px', borderRadius:'20px'}}> 
          <CardContent>
          <div style={{ margin: '1.5em' }}>
                 <p style={{fontWeight:'bolder', color:'#E93E3A'}}>Donate Using Your Visa</p>
                    <form>
                    <div style={{display:'flex', paddingTop:'0.9em', fontWeight:'bold'}}>

                    <div style={{flexDirection:'column'}}>
                    <p style={{fontSize:'13px', paddingBottom:'-0.1em'}}> Enter Card Number</p>
                <TextField
                  label="Card Number"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                />
                </div>

                 <div style={{flexDirection:'column', paddingLeft:'0.9em'}}>
                 <p style={{fontSize:'13px', paddingBottom:'-0.1em'}}> Enter Cardholder Name</p>
                <TextField
                  label="Cardholder Name"
                  name="cardHolderName"
                  value={formData.cardHolderName}
                  onChange={handleInputChange}  
                />
                </div>
                  </div>
                <div style={{display:'flex', paddingTop:'0.9em', fontWeight:'bold'}}>
                <div style={{flexDirection:'column'}}> 
                <p style={{fontSize:'13px', paddingBottom:'-0.1em'}}>Enter Expiration Date</p>
                <TextField
                  label="Expiration Date"
                  name="expirationDate"
                  value={formData.expirationDate}
                  onChange={handleInputChange}
                 
                />
                </div>
              
              <div style={{flexDirection:'column', paddingLeft:'0.9em'}}> 
             <p style={{fontSize:'13px', paddingBottom:'-0.1em'}}>Enter CVV</p>
                <TextField
                  label="CVV"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleInputChange}
                  
                />
                </div>
                </div>
                
                <div style={{paddingTop:'0.9em'}}>
                <Button variant="contained" style={{backgroundColor:'#E93E3A', fontWeight:'600', textTransform:'capitalize'}} onClick={handleCheckout}>
                  Checkout
                </Button></div>
              </form>
          </div>
          </CardContent>
              </Card>
        </Grid>

        {/* Second grid first &  pay with mobile money*/}
        <Grid item xs={12} sm={6} md={6} lg={6}  style={{justifyContent:'center', padding: isMobile ? "20px" : "120px", paddingLeft:'-0.5em'}}>
        <Card className="custom-card" style={{width:'500px', height:'410px' , borderRadius:'20px'}}> 
          <CardContent style={{paddingLeft:'1.5em'}}>
        <div>
            <p style={{fontWeight:'bolder', color:'#E93E3A', paddingTop:'0.9em'}}>Donate Using Mobile Money</p>
                <form>
                <div style={{display:'flex',flexDirection:'column' ,paddingTop:'0.9em', fontWeight:'bold'}}>
                <div>
                <p style={{fontSize:'13px', paddingBottom:'-0.1em'}}> Enter Phone Number</p>
                <TextField
                  label="Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                 
                />
                </div>

                <div>
                <p style={{fontSize:'13px', paddingBottom:'-0.1em', paddingTop:'0.9em'}}> Enter Amount</p>
                <TextField
                  label="Amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                 
                />
                </div>
                </div>

                <div style={{paddingTop:'0.9em'}}>
                <Button variant="contained" style={{backgroundColor:'#E93E3A', fontWeight:'600', textTransform:'capitalize'}} onClick={handlePayment}>
                  Pay with Mobile Money
                </Button>
                </div>
              </form>
            </div>
            </CardContent>
            </Card>
        </Grid>
       
      </Grid>
   
        </div>
    )
}export default DonateContent;