import TestRenderer from 'react-test-renderer';

import Testimonial from '.';

describe("Testimonial", () => {
    test("renders an empty Testimonial", () => {
        const testimonial = TestRenderer.create(
            <Testimonial/>
        );

        expect(testimonial.toJSON()).toMatchSnapshot();
    });

    test("renders an empty Testimonial", () => {
        const testimonial = TestRenderer.create(
            <Testimonial name="testimonial-name" description="testimonial-description"/>
        );

        expect(testimonial.toJSON()).toMatchSnapshot();
    });
});
