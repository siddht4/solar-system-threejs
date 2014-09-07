define(function() {

    var Config = {
        build: {
            SceneEnabled: true,
            SunFactoryEnabled: true,
            PlanetFactoryEnabled: true,
            MoonFactoryEnabled: true,
            AsteroidBeltFactoryEnabled: true,
            RingFactoryEnabled: true,
            OrbitFactoryEnabled: true,
            SolarSystemFactoryEnabled: true,
            StarFactoryEnabled: false,
        },
        moonOrbitsEnabled: true,
        logger: {
            enabled: true
        }
    };

    var App = {
        title: 'Solar System',
        config: Config,
        objects: {}
    };

    if (typeof window !== 'undefined') {
        window.App = App;
    }

    return App;

});
