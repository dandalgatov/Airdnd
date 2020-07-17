import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Select, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const { Option } = Select;

// const [count, setCount] = useState(0);

function onChange(value) {
    console.log(`selected ${value}`);
}

function onBlur() {
    console.log('blur');
}

function onFocus() {
    console.log('focus');
}

function onSearch(val) {
    console.log('search:', val);
}

export default function BasicSearch() {
    return (
        <div style={{display: "flex", flexFlow: "row wrap", justifyContent: "space-evenly"}}>
            <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Neighborhood"
                optionFilterProp="children"
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                onSearch={onSearch}
                filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
            >
                <Option value="Battery Park City">Battery Park City</Option>
                <Option value="Chelsea">Chelsea</Option>
                <Option value="Chinatown">Chinatown</Option>
                <Option value="Civic Center">Civic Center</Option>
                <Option value="East Village">East Village</Option>
                <Option value="Financial District">Financial District</Option>
                <Option value="Flatiron">Flatiron</Option>
                <Option value="Gramercy Park">Gramercy Park</Option>
                <Option value="Greenwich Village">Greenwich Village</Option>
                <Option value="Little Italy">Little Italy</Option>
                <Option value="Lower East Side">Lower East Side</Option>
                <Option value="Nolita">Nolita</Option>
                <Option value="Stuyvesant Town">Stuyvesant Town</Option>
                <Option value="Tribeca">Tribeca</Option>
                <Option value="West Village">West Village</Option>
                <Option value="Central Park South">Central Park South</Option>
                <Option value="Midtown">Midtown</Option>
                <Option value="Midtown East">Midtown East</Option>
                <Option value="Kips Bay">Kips Bay</Option>
                <Option value="Murray Hill">Murray Hill</Option>
                <Option value="Sutton Place">Sutton Place</Option>
                <Option value="Turtle Bay">Turtle Bay</Option>
                <Option value="Midtown South">Midtown South</Option>
                <Option value="Hell's Kitchen">Hell's Kitchen</Option>
                <Option value="Hudson Yards">Hudson Yards</Option>
                <Option value="Upper East Side">Upper East Side</Option>
                <Option value="Carnegie Hill">Carnegie Hill</Option>
                <Option value="Lenox Hill">Lenox Hill</Option>
                <Option value="Yorkville">Yorkville</Option>
                <Option value="Central Harlem">Central Harlem</Option>
                <Option value="South Harlem">South Harlem</Option>
                <Option value="East Harlem">East Harlem</Option>
                <Option value="Hamilton Heights">Hamilton Heights</Option>
                <Option value="Inwood">Inwood</Option>
                <Option value="Marble Hill">Marble Hill</Option>
            </Select>

            <Select placeholder="$Minimum" style={{ width: 120 }} onChange={onChange}>
                <Option value="$500">$500</Option>
                <Option value="$750">$750</Option>
                <Option value="$1,000">$1,000</Option>
                <Option value="$1,250">$1,250</Option>
                <Option value="$1,500">$1,500</Option>
                <Option value="$1,750">$1,750</Option>
                <Option value="$2,000">$2,000</Option>
                <Option value="$2,500">$2,500</Option>
                <Option value="$3,000">$3,000</Option>
                <Option value="$3,500">$3,500</Option>
                <Option value="$4,000">$4,000</Option>
                <Option value="$4,500">$4,500</Option>
                <Option value="$5,000">$5,000</Option>
                <Option value="$6,000">$6,000</Option>
                <Option value="$7,000">$7,000</Option>
                <Option value="$8,000">$8,000</Option>
                <Option value="$9,000">$9,000</Option>
                <Option value="$10,000">$10,000</Option>
                <Option value="$12,500">$12,500</Option>
                <Option value="$15,000">$15,000</Option>
            </Select>

            <Select placeholder="$Maximum" style={{ width: 120 }} onChange={onChange}>
                <Option value="$500">$500</Option>
                <Option value="$750">$750</Option>
                <Option value="$1,000">$1,000</Option>
                <Option value="$1,250">$1,250</Option>
                <Option value="$1,500">$1,500</Option>
                <Option value="$1,750">$1,750</Option>
                <Option value="$2,000">$2,000</Option>
                <Option value="$2,500">$2,500</Option>
                <Option value="$3,000">$3,000</Option>
                <Option value="$3,500">$3,500</Option>
                <Option value="$4,000">$4,000</Option>
                <Option value="$4,500">$4,500</Option>
                <Option value="$5,000">$5,000</Option>
                <Option value="$6,000">$6,000</Option>
                <Option value="$7,000">$7,000</Option>
                <Option value="$8,000">$8,000</Option>
                <Option value="$9,000">$9,000</Option>
                <Option value="$10,000">$10,000</Option>
                <Option value="$12,500">$12,500</Option>
                <Option value="$15,000">$15,000</Option>
            </Select>

            <Select placeholder="Min Size" style={{ width: 120 }} onChange={onChange}>
                <Option value="Studio">Studio</Option>
                <Option value="1 Bed">1 Bed</Option>
                <Option value="2 Bed">2 Bed</Option>
                <Option value="3 Bed">3 Bed</Option>
                <Option value="4+ Bed">4+ Bed</Option>
            </Select>

            <Select placeholder="Max Size" style={{ width: 120 }} onChange={onChange}>
                <Option value="Studio">Studio</Option>
                <Option value="1 Bed">1 Bed</Option>
                <Option value="2 Bed">2 Bed</Option>
                <Option value="3 Bed">3 Bed</Option>
                <Option value="4+ Bed">4+ Bed</Option>
            </Select>

            <Button type="primary" ghost >Advanced</Button>

            <Button type="primary" icon={<SearchOutlined />}>
                Search
            </Button>

        </div>
    )
}
