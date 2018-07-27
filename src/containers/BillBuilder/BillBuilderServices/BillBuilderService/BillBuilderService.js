import Aux from '../../../../hoc/Auxiliary';
import tooltipClasses from '../../../../UI/ToolTip.css'
import classes from './BillBuilderService.css'

import React, { Component } from 'react';

class BillBuilderService extends Component {
    state = {
        currentButton: null,
        serviceButtons: null,
        fadeIn: true
    };

    addServiceButtonClick = (service) => {
        this.setState({ fadeIn: false });
        this.props.addBillService(service);
        this.setState({ currentButton: this.state.serviceButtons[ 0 ] });
    };
    deleteServiceButtonClick = (service) => {
        this.setState({ fadeIn: true});
        this.props.deleteBillService(service);
        this.setState({ currentButton: this.state.serviceButtons[ 1 ] });
    };

    componentDidMount() {
        let addButtons = [
            <td style={{textAlign:'right'}}>
                <button type="button" className={classes.deleteButton} onClick={(e) => {e.stopPropagation(); this.deleteServiceButtonClick(this.props.service)}}>
                    <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAU2SURBVHhe7VzLbhxFFB1eK2DJYwuIbRTiqRriBZPpHgMbQAiSPUsWSCiGgAQYWAUQn+Ak/ABB4iV+JCLs4sQEodgBpmcwtiDNPTW3Eye6GndXV/UrdaQjWzPd93G66101vYCAgICAgICAXi9dWnrgr/Hg6dlosJTE/fEs1q+A5n/6DN+lw+H9fPndjfT48ftmY9WfRvpUEqtv6O8vSaz3prFOF5GvuWjuifW7EBa22Gy3kX7cuzcZq5hEOEfJ/5GJUp7qOmwm8eAYfLC77uDa8vLD00i9l0R6QxbAHY2PkX4HPtl9e/H7cPgQFbVPSbxtKVmvhM9IryEGDqddoKJ6gsTbFJOrkBTDlUmkX+ewmo/pUD1OxegnKZk6SUL+gNg4zGaCG4jfpASaQMRGD3fE4TYLSaRWKbj/pMCbRIrzX3obT3LY9SPt9e6hwL68M9Cmk4T8ArFzGvUAAdDTPCsF2AZS7Ou1ikgBfC4F1iZStXOa06kW07F6XwqolaSON6dVDUxrS5WxGEwLaRqWqlpn089rcFfFliTg1SQaPMZp+gM5alwn2RXR2eY0/QDDM8lxlziJB69xum6B2Q16QrWPbX2TSthlLxMQJN4nksNuUn3EabuBmc+L1XXZmSVfWJY/t6FLW2Ckt5y+hZgMFR1Z8u83TqQ3rm6mO6tvit8XIWzAFmxK31sz0qc4/XIw0/AOZ5KNeNtbqcE/O6VExL2wAcCmSxGpyrrkZHkAHUzJgQ1vEy+DpYj7xcvgXsTBMZbBHiTgV5LxohTFy1BQREm8DC5FpBHKGZbBDlguJEPlV8+eP2rqqYXIKeIi8TLAF3xK9xdipLZLFWOzbisZtmCexA8S0YWN4uw/w3IUB1oi2agdywhQj3jEMjM11BJh9V82bEkbIWoTjwgNWI7iIAMX7zTogkUEqVO8OdUFlqMYsIknybFXxZa5hNnbnXMRvIqHN1DvWW1owk4oyaBL5hJxETyLl/HP0ZGnWJb8mMV9JRlzTWsRKxIPRG+EZcmPZKQjyZgPFhaxQvFAjMZYlvyYjQYvS8Z80Yh4UH0H0DVVigfOov5LLEt+BAFv0UpAl5MIB9GI17kiHBqRm7RqREI35hatujGhIz0nFd9d65MBZCAM5WyHckCYTDBDufMsR3GE6SwUYbXKchQHDrFIRm3oQoBaRFxRh1mO4phP6TtYD27tlL7eKr0yR/Wgkx2orVxUitU6y2APLO1Jxm0oimhZ5CQRXYoHTsb9IctgD7OwHqtLkgMb3iaipXgZ94voWjzk7Gz/tOvW2IhI9VQZ8TLCBmy5FM/Q5bZfbLRxft6tyZuLYn3N+RY3egvXBEfdZKQ+4LTdAU+E6oUrosMOkca+GzdWDj3IabsFTj1KTrvEWaRe5XT9gMaGP0qOu0DK7VtO0x9wFIAcdfCYg/o1WTn6KKfpF5ji7tpBGyed5iJAP0kKpo2kxvEtTqta0Jt4WgqoTUQOnE714OOu61JgbSBib8qZ4dYde6WG8LPaxdsPEvFkGxoWxEjF9m0Ou1kwrXOjf3RCbVbe2hYF+lL0lL+XEqiT9HC/m7x4+BEOs/nAqUcK+rKUTJWkGDa8D898YT4NptewtiAl55XGp/rQ28RAlTBCUscbb4OYrEMaH+TL+XxeE4DlAVTi1NCcczpBS28b+nSTkXquUV0Tn4CY0+jZI9TgrJKg50mEn+nt2RUF2sf5NeoCXf817sVBmNJLj10BNvHsxP0nsaCPXwa5+ROgIx3hs50V/YT1Rp+AgICAgICATqHX+x/fUC67tHywNwAAAABJRU5ErkJggg=="
                        alt="btn"/></button>
            </td>,
            <td style={{textAlign:'right'}}>
                <button type="button" className={classes.addButton} onClick={(e) => {e.stopPropagation(); this.addServiceButtonClick(this.props.service)}}><img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAATpSURBVHhe7ZxNjxVFFIavXytxibpFwh5Ft84okMC9c2/1Bcaf4M7EMCOaqDO6Qo1/wGT42EK43Rc/CKzUGH8CEXczDMrCAddMNON7+h7CLF61uu+pvt1NPckbyDCn6pzT1VXV9UEnEolEIpFIpNM59NXbz/SunDjQy5JDvfHgSD9NnEj+nv8M/zb3/dzT+uuPN4uXF586Ph682svcmV6aZAuZ+xXaXsiSnf+W28bv38pt0uQ9SayUpcW2m9XV1SeRgMMI/gL0J09QCaXJ/bzMzM1LHVpdexiMB891M/c+gtygCTDUpA63LHVq9c0Fr9YetIpPEdA9FmxYoc40WREf1J1mgc7/LQRwhwdXpdwmBqFT6lb96V5efBGJu86DmaHS5DvxTd2sJzJAQHdpALWQu9sdD95Qd+sF+rol6G/ueH0EH/9CazytbteAnc4TcOhL5mydhUR+Ib5rFDMCDmDacJ452ATB97WZJhEt73PmWJOElnhWw6kWJO8D5lAz5ZY1rGqQ0TbvjKkzzZPEUtnonM/zaj1VKSv3e/9q/wUNMxx4des3SbYSJtsaZhjyzzNWcavkTmq4tsjqBp5Q0G/bn+787CVmayVMbW4HWYBAR/sJq9BSvjBbSyHWjzVsG7T13WeVWcoXZmspJHDLtBXKYiiryFq+MFtrIYlnNPzpkCXyKlaSRb4wW3u5dZPtAZlg8grs5QuzDSG0wnlNQ3nwJC6ywkPIF2YbRu6cpqEcsl2I19du9+x/5AuzDSN3b6rXWPZtecFh5AuzDSXMQF7WdBRHRiJWaCj5wmzDaYqVGry+GS80jHxhtqEkOdB0FAfGt1ihoeQLsw0l5OCmpqMYcogHzdfjrMq/64fNHzXk2SE+MN/85bZLHWiSk1C8QH+1I4HJzrE02a9p8WdhNHyNFVZEbUmgzEY0Lf70R8M3WWFF1JYEllru740HA1ZYEbUlgegH+5oWf2ICd6tEAi0WEdqSwFKvcBxEHqnUIBKnMY9UahoTJ9IT9TL3oPTNgPgpN8WnnCAf0qzQUPKF2QZTmqSajuLE5az8FV7SdBRHLrGwQkPJF2YbSt3MHdR0FEeW9KvYD34oX5htCKH1bU29M4d+sLITqL4w2xBC7GuahvLgKcyzwkPIF2YbRGkyp2kojzRhzAfXaQXG8oXZ2sutm52frmo09oXZ2svw2K8ctEGBwe+7+cJsLYW+7w/zI27oD1ZYZZbyhdmaKk0+1LDt0Fa4SSs0EjtMycRsrYTWt3H0xtFnNWxb5NYjq7RNQoxDDTcMGFCusYrbILS+rzXMcMhVALzKrbvmgOT9NhwNn9cwwyJL3GiJrbpoYzJpLoLMk5gzTVQ3c+9oWNWCJ3eWOdQkSQwazgyYXHddY441QeJ7Le4Mo/9o3rXXNPls9snbBRw63YSBRXyE3lW368VkM77GUxy5qlb1aFsUmUshid/SAGYotLpvjl06tVfdrD9I4kl00rdZMFUKPmwE/zwLRb4AkSYrePpbLLiQyutMk4+CLQxUia7kLEtrYMFaalKHWzZfz6sD+fYAOnEEeQFBmi3QSmtDmWsYxF6v1dQkJHkyR8NXEPwSkpriz1+gByxBuyW/g2TdxAMYia1chJl667EtyCGe3pUTL0029N3hh/8FqBw3lp/1r/b3lT7oE4lEIpFIpFV0Ov8AJeKdm2ikF4YAAAAASUVORK5CYII="
                    alt="btn"/></button>
            </td>
        ];
        this.setState({ serviceButtons: addButtons });
        this.setState({ currentButton: addButtons[ 1 ] });
    }
    onServiceElement = (service) => {
      if (this.state.currentButton === this.state.serviceButtons[1]) {
          this.addServiceButtonClick(service)
      }else{
          this.deleteServiceButtonClick(service)
      }
    };

    render() {
        const { name, price, category } = this.props.service;
        const { id } = this.props;
        return (
            <tr onClick={() => this.onServiceElement(this.props.service)}>
            <Aux>
                <th scope='row'>
                <span className={tooltipClasses.tooltip}>...{id.slice(-2)}<span
                    className={tooltipClasses.tooltiptext}>{id}</span></span></th>
                <td> {name} </td>
                <td> {price} </td>
                <td style={{ textAlign: 'center' }}> {category ? category.categoryName : null} </td>
                {this.state.currentButton}
            </Aux>
            </tr>
        );
    }
}

export default BillBuilderService;
