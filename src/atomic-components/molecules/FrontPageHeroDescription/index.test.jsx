import TestRenderer from 'react-test-renderer';

import { render } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import FrontPageHeroDescription from '.';

let container = null;
beforeEach(() => {
    // setup DOM element as render target
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it ('renders the correct text content', () => {
    act(() => {
        render(
            <FrontPageHeroDescription />,
            container
        );
    });
    expect(container.textContent).toBe("");
});

describe("FrontPageHeroDescription", () => {
    test("renders FrontPageHeroDescription and matches snapshot", () => {
        const frontPageHeroDescription = TestRenderer.create(
            <FrontPageHeroDescription/>
        );

        expect(frontPageHeroDescription.toJSON()).toMatchSnapshot();
    });
});
