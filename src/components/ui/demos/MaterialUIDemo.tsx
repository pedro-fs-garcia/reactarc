import React, { useState } from 'react';
import {
  Button,
  TextField,
  Card,
  CardContent,
  CardActions,
  Typography,
  Box,
  Chip,
  Alert,
  AlertTitle,
  Switch,
  FormControlLabel,
  Paper,
  IconButton,
  Tooltip,
  Popover
} from '@mui/material';
import {
  Send,
  Favorite,
  Share,
  MoreVert,
  CheckCircle,
  Warning,
  Error,
  Info,
  Close
} from '@mui/icons-material';
import { useTheme } from '@/contexts/theme/ThemeProvider';

const PopoverContent = ({ onClose }: { onClose: () => void }) => (
  <Box sx={{ p: 2, position: 'relative', width: 250 }}>
    <IconButton
      size="small"
      onClick={onClose}
      sx={{ position: 'absolute', top: 8, right: 8 }}
      aria-label="fechar"
    >
      <Close fontSize="small" />
    </IconButton>

    <Typography variant="subtitle1" gutterBottom>
      Share
    </Typography>
    <Typography variant="body2">
      You can add content here to share links, social media, or other sharing actions.
    </Typography>
  </Box>
);


export default function MaterialUIDemo() {
  const { theme, toggleTheme } = useTheme();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'share-popover' : undefined;

  return (
    <div className="max-w-7xl mx-auto px-6 space-y-8" id="material-ui-demo" >
      <div className="text-center">
        <Typography variant="h4" component="h2" gutterBottom>
          Material UI Integration
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Material UI components seamlessly integrated with our theme system
        </Typography>
      </div>

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4 }}>
        {/* Buttons Section */}
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Buttons
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 2 }}>
              <Button variant="contained" startIcon={<Send />}>
                Primary
              </Button>
              <Button variant="outlined" color="secondary">
                Secondary
              </Button>
              <Button variant="text">
                Text
              </Button>
              <Button variant="contained" color="error">
                Error
              </Button>
            </Box>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button size="small" variant="contained">
                Small
              </Button>
              <Button size="medium" variant="contained">
                Medium
              </Button>
              <Button size="large" variant="contained">
                Large
              </Button>
            </Box>
          </CardContent>
        </Card>

        {/* Form Controls Section */}
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Form Controls
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                placeholder="Enter your email"
              />
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
              />
              <FormControlLabel
                control={<Switch defaultChecked />}
                label="Remember me"
              />
            </Box>
          </CardContent>
        </Card>

        {/* Alerts Section */}
        <Card sx={{ gridColumn: { xs: '1', md: '1 / -1' } }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Alerts
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Alert severity="success" icon={<CheckCircle />}>
                <AlertTitle>Success</AlertTitle>
                This is a success alert — check it out!
              </Alert>
              <Alert severity="info" icon={<Info />}>
                <AlertTitle>Info</AlertTitle>
                This is an info alert — check it out!
              </Alert>
              <Alert severity="warning" icon={<Warning />}>
                <AlertTitle>Warning</AlertTitle>
                This is a warning alert — check it out!
              </Alert>
              <Alert severity="error" icon={<Error />}>
                <AlertTitle>Error</AlertTitle>
                This is an error alert — check it out!
              </Alert>
            </Box>
          </CardContent>
        </Card>

        {/* Cards with Actions */}
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Card with Actions
            </Typography>
            <Typography variant="body2" color="text.secondary">
              This is a sample card with actions. You can add buttons, icons, or other interactive elements.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" startIcon={<Favorite />}>
              Like
            </Button>
            <Button
              size="small"
              startIcon={<Share />}
              onClick={handleClick}
              aria-describedby={id}
            >
              Share
            </Button>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              <PopoverContent onClose={handleClose} />
            </Popover>
            <Box sx={{ flexGrow: 1 }} />
            <Tooltip title="More options">
              <IconButton size="small">
                <MoreVert />
              </IconButton>
            </Tooltip>
          </CardActions>
        </Card>

        {/* Chips Section */}
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Chips
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              <Chip label="Default" />
              <Chip label="Primary" color="primary" />
              <Chip label="Secondary" color="secondary" />
              <Chip label="Success" color="success" />
              <Chip label="Error" color="error" />
              <Chip label="Warning" color="warning" />
              <Chip label="Info" color="info" />
            </Box>
          </CardContent>
        </Card>

        {/* Theme Toggle */}
        <Paper sx={{ p: 3, textAlign: 'center', gridColumn: { xs: '1', md: '1 / -1' } }}>
          <Typography variant="h6" gutterBottom>
            Current Theme: {theme}
          </Typography>
          <Button
            variant="contained"
            onClick={toggleTheme}
            sx={{ mt: 2 }}
          >
            Toggle Theme
          </Button>
        </Paper>
      </Box>
    </div>
  );
} 