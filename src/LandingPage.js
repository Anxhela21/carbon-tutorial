    import React from 'react';
    import {
        Breadcrumb,
        BreadcrumbItem,
        Button,
        Tabs,
        Tab,
    } from 'carbon-components-react';

    //Importing props we will need for our components 
    const props = {
        tabs: {
        selected: 0,
        triggerHref: '#',
        role: 'navigation',
        },
        tab: {
        href: '#',
        role: 'presentation',
        tabIndex: 0,
        },

    };
    

    //Function to append our page components (rows, 1,2 and 3)
    const LandingPage = () => {
    return (

        // This is our first row (containing our banner):
       <div>
            <div className="bx--row landing-page__banner">
        <div className="bx--col-lg-16">
        <Breadcrumb noTrailingSlash>
            <BreadcrumbItem>
            <a href="/">Getting started</a>
            </BreadcrumbItem>
        </Breadcrumb>
        <h1 className="landing-page__heading">
            Design &amp; build with Carbon
        </h1>
        </div>
    </div>

        // This is our second row (containing our first tab)
    <div className="bx--row landing-page__r2">
    <div className="bx--col bx--no-gutter">
        <Tabs {...props.tabs}>
        <Tab {...props.tab} label="About">
            <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
            <div className="bx--row landing-page__tab-content">
                <div className="bx--col-md-4 bx--col-lg-7">
                <h2 className="landing-page__subheading">
            What is Carbon?
            </h2>
            <p className="landing-page__p">
            Carbon is IBM’s open-source design system for digital
            products and experiences. With the IBM Design Language
            as its foundation, the system consists of working code,
            design tools and resources, human interface guidelines,
            and a vibrant community of contributors.
            </p>
            <Button>Learn more</Button>
        </div>
        <div className="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8">
            <img className="landing-page__illo" src={`${process.env.PUBLIC_URL}/tab-illo.png`} alt="Carbon illustration" />
        </div>
        </div>
    </div>
    </Tab>
    <Tab {...props.tab} label="Design">
            <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
            <div className="bx--row landing-page__tab-content">
                <div className="bx--col-lg-16">
                Rapidly build beautiful and accessible experiences. The Carbon kit
                contains all resources you need to get started.
                </div>
            </div>
            </div>
        </Tab>
        <Tab {...props.tab} label="Develop">
            <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
            <div className="bx--row landing-page__tab-content">
                <div className="bx--col-lg-16">
                Carbon provides styles and components in Vanilla, React, Angular,
                and Vue for anyone building on the web.
                </div>
            </div>
            </div>
        </Tab>
        </Tabs>
    </div>
    </div>

    // This is our thrid row (will update in later lesson)
    <div className="bx--row landing-page__r3">
    <div className="bx--col-md-4 bx--col-lg-4">
    <h3 className="landing-page__label">The Principles</h3>
    </div>
    <div className="bx--col-md-4 bx--col-lg-4">Carbon is Open</div>
    <div className="bx--col-md-4 bx--col-lg-4">Carbon is Modular</div>
    <div className="bx--col-md-4 bx--col-lg-4">Carbon is Consistent</div>
    </div>
    </div>
    )
    };
    

    export default LandingPage;