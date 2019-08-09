import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';

import FormikRegistrationForm from './RegistrationForm';

describe('<RegistertrationForm />', () => {
    it('should render Submit', () => {
        const register = render(<FormikRegistrationForm />)

        register.getByText(/Submit/);
    });

    // it('should render the onClick on button', () => {
    //     const click = render(<RegistrationForm />)

    //     fireEvent.click
    // })
})