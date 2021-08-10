import React from 'react';
import useStyles from '../styles/cartScreen';
import {
  Container,
  CardMedia,
  Typography,
  CardContent,
  Divider,
  Card,
} from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { IconButton,Box } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const CartScreen = props => {
  const classes = useStyles();
  return (
    <div>
      <Container>
        <Typography
          variant='h1'
          style={{ marginTop: '100px', marginBottom: '10px' }}
        >
          Add Your Wishlist Items
        </Typography>
        <Divider variant='fullWidth' />
        <List className={classes.root}>
          <ListItem>
            <Card className={classes.root}>
              <CardMedia
                className={classes.cover}
                image="http://placekitten.com/g/100/100"
              />
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography variant='h5' className={classes.mainHeader}>
                    Sofa
                  </Typography>
                  <Typography variant='h6' className={classes.mainPrice}>
                    $35
                  </Typography>
                  <Typography variant='body2' className={classes.typoDescrip}>
                    product.description
                  </Typography>

                  <Divider variant='fullWidth' />
                  <Box
                    display='flex'
                    flexDirection='row'
                    justifyContent='space-between'
                  >
                    <Box m={2}>
                      <div>Quantity :</div>
                    </Box>
                    <Box>
                      <IconButton label='Remove item'>
                        <RemoveIcon />
                      </IconButton>
                      <IconButton label='Add item'>
                        <AddIcon />
                      </IconButton>
                    </Box>
                  </Box>

                  <Divider variant='fullWidth' />
                </CardContent>
              </div>
            </Card>
          </ListItem>
        </List>
      </Container>

      {/* <div>
                {cartItems.length === 0 && <div>Cart is empty</div>}
       </div> */}
    </div>
  );
};

export default CartScreen;
