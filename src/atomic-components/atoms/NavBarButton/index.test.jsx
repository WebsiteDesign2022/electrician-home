import {render, screen} from '@testing-library/react'
import TestRenderer from 'react-test-renderer';

import NavBarButton from '.';

describe("NavBarButton", () => {
    test("renders NavBarButton and contains link", () => {
    
        render(<NavBarButton link="www.google.com" displayName="Google" />);

        expect(
            screen.getByRole("link", { link: 'www.google.com', displayName: 'Google' })
        ).toBeVisible();

        expect(
            screen.getByText(/Google/i)
        ).toBeInTheDocument();

    });

    test("renders NavBarButton", () => {
        const navBarButton = TestRenderer.create(
            <NavBarButton/>
        );

        expect(navBarButton.toJSON()).toMatchSnapshot();
    });
});
