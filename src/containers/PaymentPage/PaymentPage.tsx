import { get, isEmpty, isEqual } from 'lodash';
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Box from '../../components/Box';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Input from '../../components/Input';
import {
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
} from '../../components/Modal';
import { REG_EXP } from '../../utils/constants';
import { httpServices } from '../../utils/http-services';
import { BusStopsList } from '../../utils/types';
import { getLocalStorageData } from '../../utils/utility-functions';
import { REF_CURRENT_VALUE_PATH } from './PaymentPage.constants';
import './styles.css';

type PaymentPageProps = {
    location: { state?: { name: string } };
    busStops: BusStopsList;
    setBusStopsList: (data: BusStopsList) => void;
};

type PaymentPageState = {
    showModal: boolean;
    message: string;
    redirect: boolean;
};

class PaymentPage extends Component<PaymentPageProps, PaymentPageState> {
    constructor(props: PaymentPageProps) {
        super(props);
        this.state = {
            showModal: false,
            message: '',
            redirect: false,
        };
    }

    private paymentTypeRef = React.createRef<HTMLInputElement>();
    private amountRef = React.createRef<HTMLInputElement>();
    private nameRef = React.createRef<HTMLInputElement>();
    private emailRef = React.createRef<HTMLInputElement>();
    private cardNumberRef = React.createRef<HTMLInputElement>();
    private cvvRef = React.createRef<HTMLInputElement>();
    private mmRef = React.createRef<HTMLInputElement>();
    private yyRef = React.createRef<HTMLInputElement>();

    componentDidMount() {
        const { location } = this.props;
        const name = get(location, ['state', 'name'], '');
        if (isEmpty(name)) {
            this.setState({
                redirect: true,
            } as PaymentPageState);
        }
    }

    /**
     * Resets Form Validations
     */
    resetForm = () => {
        this.paymentTypeRef.current?.classList.remove('error');
        this.amountRef.current?.classList.remove('error');
        this.nameRef.current?.classList.remove('error');
        this.emailRef.current?.classList.remove('error');
        this.cardNumberRef.current?.classList.remove('error');
        this.cvvRef.current?.classList.remove('error');
        this.mmRef.current?.classList.remove('error');
        this.yyRef.current?.classList.remove('error');
    };

    /**
     * Validates Form Inputs
     */
    validateSubmit = () => {
        const paymentType = get(
            this.paymentTypeRef,
            REF_CURRENT_VALUE_PATH,
            false,
        );
        const amount = get(this.amountRef, REF_CURRENT_VALUE_PATH, false);
        const name = get(this.nameRef, REF_CURRENT_VALUE_PATH, false);
        const email = get(this.emailRef, REF_CURRENT_VALUE_PATH, false);
        const cardNumber = get(
            this.cardNumberRef,
            REF_CURRENT_VALUE_PATH,
            false,
        );
        const cvv = get(this.cvvRef, REF_CURRENT_VALUE_PATH, false);
        const mm = get(this.mmRef, REF_CURRENT_VALUE_PATH, false);
        const yy = get(this.yyRef, REF_CURRENT_VALUE_PATH, false);
        let isValid = true;
        if (isEqual(paymentType, false) || isEmpty(paymentType)) {
            isValid = false;
            this.paymentTypeRef.current?.classList.add('error');
        }
        if (isEqual(amount, false) || isEmpty(amount) || amount > 1000) {
            isValid = false;
            this.amountRef.current?.classList.add('error');
        }
        if (isEqual(name, false) || isEmpty(name)) {
            isValid = false;
            this.nameRef.current?.classList.add('error');
        }
        if (
            isEqual(cardNumber, false) ||
            isEmpty(cardNumber) ||
            !isEqual(cardNumber.length, 16)
        ) {
            isValid = false;
            this.cardNumberRef.current?.classList.add('error');
        }

        if (isEqual(cvv, false) || isEmpty(cvv) || !isEqual(cvv.length, 3)) {
            isValid = false;
            this.cvvRef.current?.classList.add('error');
        }

        if (isEqual(mm, false) || isEmpty(mm) || !isEqual(mm.length, 2)) {
            isValid = false;
            this.mmRef.current?.classList.add('error');
        }
        if (isEqual(yy, false) || isEmpty(yy) || !isEqual(yy.length, 2)) {
            isValid = false;
            this.yyRef.current?.classList.add('error');
        }
        return {
            isValid,
            paymentType,
            amount,
            name,
            email,
            cardNumber,
            cvv,
            mm,
            yy,
        };
    };

    /**
     * handles payment form submit
     */
    handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        try {
            this.resetForm();
            const { isValid, amount, name, email } = this.validateSubmit();
            const { location } = this.props;
            const stopName: string = get(location, ['state', 'name'], '');
            if (isValid) {
                httpServices
                    .addDonation({
                        stopName,
                        amount: parseInt(amount),
                        funderName: name,
                        funderEmail: email,
                    })
                    .then(response => {
                        if (isEqual(get(response, 'status', 0), 200)) {
                            this.setState(
                                {
                                    showModal: true,
                                    message: 'Payment SuccessFul',
                                },
                                () => {
                                    if (getLocalStorageData()) {
                                        this.props.setBusStopsList(
                                            getLocalStorageData(),
                                        );
                                    }
                                },
                            );
                        } else {
                            this.setState({
                                showModal: true,
                                message: 'Payment Failure. Please try Later',
                            });
                        }
                    })
                    .catch(err => {
                        this.setState({
                            showModal: true,
                            message: 'Payment Failure. Please try Later',
                        });
                    });
            }
        } catch (error) {
            this.setState({
                showModal: true,
                message: 'Payment Failure. Please try Later',
            });
        }
    };

    render() {
        const { location } = this.props;
        const name: string = get(location, ['state', 'name'], '');
        const { redirect } = this.state;
        if (redirect) {
            return <Redirect to="/" />;
        }
        return (
            <React.Fragment>
                <Header noSearch />
                <Box>
                    <span className="title">Payment</span>
                    <form className="payment-form">
                        <fieldset className="fieldset payment-type">
                            <Input
                                type="radio"
                                value="credit"
                                name="group1"
                                checked
                                ref={this.paymentTypeRef}
                            />
                            <label>Credit Card</label>
                            <Input
                                type="radio"
                                value="debit"
                                name="group1"
                                ref={this.paymentTypeRef}
                            />
                            <label>Debit Card</label>
                        </fieldset>
                        <fieldset className="fieldset">
                            <Input
                                className="payment-input"
                                type="text"
                                placeholder="Amount"
                                pattern={REG_EXP.NUMERIC}
                                ref={this.amountRef}
                            />
                            <span>Please enter valid Amount</span>
                        </fieldset>
                        <fieldset className="fieldset">
                            <Input
                                className="payment-input"
                                type="text"
                                placeholder="Name"
                                pattern={REG_EXP.ALPHA}
                                ref={this.nameRef}
                            />
                            <span>Please enter valid Name</span>
                        </fieldset>
                        <fieldset className="fieldset">
                            <Input
                                className="payment-input"
                                type="email"
                                placeholder="Email(optional)"
                                ref={this.emailRef}
                            />
                            <span>Please enter valid Email</span>
                        </fieldset>
                        <fieldset className="fieldset">
                            <Input
                                className="payment-input"
                                type="text"
                                placeholder="Card Number"
                                pattern={REG_EXP.NUMERIC}
                                maxLength={16}
                                ref={this.cardNumberRef}
                            />
                            <span>Please enter valid Card Number</span>
                        </fieldset>
                        <fieldset className="fieldset">
                            <Input
                                className="payment-input"
                                type="text"
                                placeholder="CVV"
                                pattern={REG_EXP.NUMERIC}
                                maxLength={3}
                                ref={this.cvvRef}
                            />
                            <span>Please enter valid CVV Number</span>
                        </fieldset>
                        <fieldset className="fieldset payment-exp">
                            <div className="inline-block">
                                <Input
                                    className="payment-input"
                                    type="text"
                                    placeholder="MM"
                                    pattern={REG_EXP.NUMERIC}
                                    maxLength={2}
                                    ref={this.mmRef}
                                />
                            </div>
                            <div className="inline-block">
                                <Input
                                    className="payment-input"
                                    type="text"
                                    placeholder="YY"
                                    pattern={REG_EXP.NUMERIC}
                                    maxLength={2}
                                    ref={this.yyRef}
                                />
                            </div>
                        </fieldset>
                        <Button
                            type="primary"
                            name="Pay"
                            handleClick={e => {
                                this.handleSubmit(e);
                            }}
                        />
                    </form>
                </Box>
                {this.state.showModal && (
                    <Modal>
                        <ModalHeader title="Modal Header" />
                        <ModalBody>{this.state.message}</ModalBody>
                        <ModalFooter>
                            <Link
                                to={{
                                    pathname: '/details',
                                    state: {
                                        name,
                                    },
                                }}
                            >
                                <Button type="cancel" name="Close" />
                            </Link>
                        </ModalFooter>
                    </Modal>
                )}
            </React.Fragment>
        );
    }
}

export default PaymentPage;
