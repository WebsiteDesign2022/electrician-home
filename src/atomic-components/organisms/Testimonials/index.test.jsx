import TestRenderer from 'react-test-renderer';

import Testimonials from '.';

describe("Testimonials", () => {
    test("renders Testimonials given empty state", () => {
        const render = TestRenderer.create(
            <Testimonials
                testimonials={[]}
            />
        );
        expect(render.toJSON()).toMatchSnapshot();
    });

    test("renders Testimonials given non-empty state", () => {
        const render = TestRenderer.create(
            <Testimonials
                testimonials={[
                    {
                        name: 'testimonial name 1',
                        description: 'testimonial description 1'
                    }
                ]}
            />
        );
        expect(render.toJSON()).toMatchSnapshot();
    });

    test("renders Testimonials given non-empty state", () => {
        const render = TestRenderer.create(
            <Testimonials
                testimonials={[
                    {
                        name: 'testimonial name 1',
                        description: 'testimonial description 1'
                    },
                    {
                        name: 'testimonial name 2',
                        description: 'testimonial description 2'
                    },
                    {
                        name: 'testimonial name 3',
                        description: 'testimonial description 3'
                    },
                    {
                        name: 'testimonial name 4',
                        description: 'testimonial description 4'
                    }
                ]}
            />
        );
        expect(render.toJSON()).toMatchSnapshot();
    });
});
