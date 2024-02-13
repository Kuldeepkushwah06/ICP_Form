
import React, { useState } from 'react';
import {
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Box,
  Container,
  Typography,
} from '@mui/material';
import { Add, Remove } from '@mui/icons-material';


const ICPForm = () => {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [link, setLink] = useState('');
  const [compositorsLinks, setCompositorsLinks] = useState(['']);
  const [stage, setStage] = useState('');
  const [type, setType] = useState([]);

  const handleAddCompositorLink = () => {
    setCompositorsLinks([...compositorsLinks, '']);
  };

  const handleRemoveCompositorLink = (index) => {
    const updatedLinks = [...compositorsLinks];
    updatedLinks.splice(index, 1);
    setCompositorsLinks(updatedLinks);
  };

  const handleSubmit = () => {
    const data = {
      productName,
      productDescription,
      link,
      compositorsLinks,
      stage,
      type,
    };
    console.log(data);
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: 4,
        bgcolor: '#444444', 
        p: 3,
        borderRadius: 2,
        color: 'white', 
      }}
    >
      <Typography variant="h5" gutterBottom>
        ICP Form
      </Typography>

      <TextField
        label={!productName ? "Product Name" : null}
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        fullWidth
        margin="normal"
        InputProps={{
          sx: { bgcolor: 'white', borderRadius: 1, color: 'gray' }, 
        }}
      />

      <TextField
        label={!productDescription ? "Product Description" : null}
        value={productDescription}
        onChange={(e) => setProductDescription(e.target.value)}
        fullWidth
        multiline
        rows={4}
        margin="normal"
        InputProps={{
          sx: { bgcolor: 'white', borderRadius: 1, color: 'gray' }, 
        }}
      />

      <TextField
        label={!link ? "Link" : null}
        value={link}
        onChange={(e) => setLink(e.target.value)}
        fullWidth
        margin="normal"
        InputProps={{
          sx: { bgcolor: 'white', borderRadius: 1, color: 'gray' }, 
        }}
      />

      <FormControl fullWidth margin="normal">
        <InputLabel
          sx={{ color: stage ? 'black' : 'white' }}
        >Stage</InputLabel>

        <Select
          value={stage}
          onChange={(e) => setStage(e.target.value)}
          displayEmpty
          sx={{ bgcolor: 'white', borderRadius: 1, color: 'gray' }} 
        >
          <MenuItem disabled value="">
            <em>Select Stage</em>
          </MenuItem>
          <MenuItem value="MVP">MVP</MenuItem>
          <MenuItem value="MMP">MMP</MenuItem>
        </Select>

      </FormControl>

      <FormControl fullWidth margin="normal">
        <InputLabel
          
          sx={{ color: type.length ? 'black' : 'gray' }}
        >Type</InputLabel>
        <Select
          multiple
          value={type}
          onChange={(e) => setType(e.target.value)}
          displayEmpty
          sx={{ bgcolor: 'white', borderRadius: 1, color: 'gray' }} 
        >
          <MenuItem disabled value="">
            <em>Select Type</em>
          </MenuItem>
          <MenuItem value="Mobile">Mobile</MenuItem>
          <MenuItem value="Web">Web</MenuItem>
        </Select>
      </FormControl>

      {compositorsLinks.map((link, index) => (
        <Box key={index} sx={{ display: 'flex', alignItems: 'center', marginTop: 2 }}>
          <TextField
            label={!link ? "Compositors Links" : null}
            value={link}
            onChange={(e) => {
              const updatedLinks = [...compositorsLinks];
              updatedLinks[index] = e.target.value;
              setCompositorsLinks(updatedLinks);
            }}
            sx={{ flexGrow: 1, bgcolor: 'white', borderRadius: 1, color: 'gray' }} 
          />
          {index === compositorsLinks.length - 1 ? (
            <Button onClick={handleAddCompositorLink} startIcon={<Add sx={{ marginLeft: 1 }} />} sx={{ ml: 1, borderRadius:
              15, bgcolor: 'primary.main', color: 'white' }}> 
            </Button>
          ) : (
            <Button onClick={() => handleRemoveCompositorLink(index)} startIcon={<Remove sx={{ marginLeft: 1 }} />} sx={{ ml: 1, borderRadius: 15, bgcolor: 'error.main', color: 'white' }}> 
            </Button>
          )}
        </Box>
      ))}

      <Button variant="contained" color="secondary" onClick={handleSubmit} sx={{ mt: 2 }}>
        Submit
      </Button>
    </Container>
  );
};

export default ICPForm;
