
import React from 'react';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { RocketLaunch, Cloud, DataObject } from '@mui/icons-material';


interface DeployButtonsProps {
    deploy : (value : string) => void;
}

const DeployButtons : React.FC<DeployButtonsProps> =
    ({ deploy }) =>
{

    return (
       <Stack direction="row" spacing={2}>
           <Button variant="outlined" size="small"
               startIcon={<RocketLaunch/>}
               onClick={() => deploy("docker-compose")}>
               Deploy for Docker Compose
           </Button>
           <Button variant="outlined" size="small"
               startIcon={<Cloud/>}
               onClick={() => deploy("k8s")}>
               Deploy for Kubernetes
           </Button>
           <Button variant="outlined" size="small"
               startIcon={<DataObject/>}
               onClick={() => deploy("json")}>
               JSON Launch Configuration
           </Button>
       </Stack>
    );

}
export default DeployButtons;
