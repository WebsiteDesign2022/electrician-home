import TestRenderer from 'react-test-renderer';
import {render, screen} from '@testing-library/react';

import SocialMediaButton from '.';

describe("SocialMediaButton", () => {
    test("renders SocialMediaButton", () => {
    
        render(<SocialMediaButton link="www.google.com" name="Google" />);

        expect(
            screen.getByRole("link", { link: 'www.google.com', name: 'Google' })
        ).toBeVisible();

        expect(
            screen.getByText(/Google/i)
        ).toBeInTheDocument();

    });

    test("renders SocialMediaButton", () => {
        const socialMediaButton = TestRenderer.create(
            <SocialMediaButton link="www.facebook.com" name="Facebook" />
        );

        expect(socialMediaButton.toJSON()).toMatchSnapshot();
    });
});
