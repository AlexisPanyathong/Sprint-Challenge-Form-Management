import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';

import RegistrationForm from './RegistrationForm';

describe('<RegistertrationForm />', () => {
    it('should render Submit', () => {
        const register = render(<RegistrationForm />)

        register.getByText(/Submit/);
    });
})