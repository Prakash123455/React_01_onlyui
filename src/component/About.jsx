import PageTitle from "./PageTitle";

export default function About() {
    return (
        <div>
            <div className="py-12 bg-normalbg dark:bg-darkbg font-primary">
                <div className="max-w-4xl mx-auto px-4">
                    <PageTitle title="About EazyStickers" />
                </div>

                    {/* Main Content */}
                    <div className="max-w-4xl mx-auto px-4 mt-8">
                        {/* Who We Are Section */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                Who We Are
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-4">
                                Welcome to EazyStickers, your one-stop destination for unique, high-quality stickers that express your personality and creativity. We believe in the power of self-expression through art and design.
                            </p>
                            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                                Founded with a passion for creativity, we curate and offer an exceptional collection of stickers from talented artists around the world. Whether you're looking to personalize your laptop, decorate your room, or add flair to your belongings, we've got something special for everyone.
                            </p>
                        </section>

                        {/* Our Mission Section */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                Our Mission
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                                To make creativity accessible and affordable for everyone. We empower individuals to express themselves through premium sticker designs that bring joy, spark conversations, and transform everyday items into statements of style and personality.
                            </p>
                        </section>

                        {/* Why Choose Us Section */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                                Why Choose Us?
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                                        🎨 Curated Collection
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        Handpicked designs from talented artists worldwide, ensuring quality and uniqueness in every sticker.
                                    </p>
                                </div>

                                <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                                        ⚡ Fast Shipping
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        Get your stickers delivered quickly without compromising on quality or design excellence.
                                    </p>
                                </div>

                                <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                                        💳 Affordable Prices
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        Premium quality stickers at prices that won't break the bank. Great value for your money!
                                    </p>
                                </div>

                                <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                                        🎁 Customer Support
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        Dedicated support team ready to help with any questions or concerns about your order.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Contact Section */}
                        <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-lg text-center">
                            <h2 className="text-3xl font-bold mb-4">
                                Have Questions?
                            </h2>
                            <p className="text-lg mb-6">
                                We'd love to hear from you! Get in touch with our team for any inquiries or feedback.
                            </p>
                            <a
                                href="/contact"
                                className="inline-block bg-white text-purple-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition duration-200"
                            >
                                Contact Us
                            </a>
                        </section>
                    </div>
                </div>
        </div>
    );
}