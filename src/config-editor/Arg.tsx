
import React from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';

import {
    ParameterDefinition, ParameterValue
} from './Pattern';

interface ArgProps {
    field : ParameterDefinition,
    value : ParameterValue,
    setParameter : (
        value : ParameterValue
    ) => void;
};

const Arg : React.FC<ArgProps> =
    ({ field, value, setParameter }) => 
{

    if (field.type == "multiline") {
        return ( 
                <TextField
                    sx={{ width: "100%" }}
                    label={field.label}
                    defaultValue={value}
                    helperText={field.description}
                    multiline
                    maxRows={10}
                    onChange={e => {
                        if (!e.target.value) return;
                        setParameter(
                            e.target.value
                        );
                    }}
                />
        );
    }

    if (field.type == "text") {
        const w = field.width ? (field.width + "ch") : "30ch";
        return ( 
                <TextField
                    sx={{ width: w }}
                    label={field.label}
                    defaultValue={value}
                    helperText={field.description}
                    onChange={e => {
                        if (!e.target.value) return;
                        setParameter(
                            e.target.value
                        );
                    }}
                />
        );
    }

    if (field.type == "integer") {
        const w = field.width ? (field.width + "ch") : "30ch";
        return ( 
                <TextField
                    sx={{ width: w }}
                    label={field.label}
                    type="number"
                    defaultValue={value}
                    helperText={field.description}
                    slotProps={{ inputLabel: { shrink: true } }}
                    onChange={e => {
                        if (!e.target.value) return;
                        setParameter(
                            e.target.value
                        );
                    }}
                />
        );
    }

    if (field.type == "float") {
        const w = field.width ? (field.width + "ch") : "30ch";
        return ( 
                <TextField
                    sx={{ width: w }}
                    label={field.label}
                    type="number"
                    defaultValue={value}
                    helperText={field.description}
                    slotProps={{ inputLabel: { shrink: true } }}
                    onChange={e => {
                        if (!e.target.value) return;
                        setParameter(
                            e.target.value
                        );
                    }}
                />
        );
    }

    if (field.type == "slider") {
        console.log(value);
        return (
            <>
            <Stack alignItems="left">
            <Box sx={{width: "80%", ml: "1rem", mr: "1rem" }}>
            <Typography gutterBottom>
              {field.label}
            </Typography>
                <Slider
                    sx={{ width: "80%", ml: 0, mr: 0 }}
                    label={field.label}
                    type="number"
                    value={value}
                    min={field.min}
                    max={field.max}
                    valueLabelDisplay="auto"
                    step={field.step}
                    onChange={e => {
                        if (e.target.value == null) return;
                        setParameter(
                            e.target.value
                        );
                    }}
                />
                <Box>{value}</Box>
            <Typography variant="caption" gutterBottom>
              {field.description}
            </Typography>
                </Box>
                </Stack>
            </>
        );
    }

    if (field.type == "select") {
        return ( 
            <FormControl fullWidth>
              <InputLabel>{field.label}</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={20}
                label="{field.label}"
                onChange={e => {
                    if (!e.target.value) return;
                    setParameter(
                        e.target.value
                    );
                }}

              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
              <FormHelperText>{field.description}</FormHelperText>
            </FormControl>
        );
    }

    return ( <div>Can't create input for field {field.name}</div> );

}

export default Arg;

