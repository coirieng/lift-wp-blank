<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit9cbf56478e742c41099babb5ecfa5a68978
{
    public static $prefixLengthsPsr4 = array (
        'S' => 
        array (
            'ScssPhp\\ScssPhp\\' => 16,
        ),
        'C' => 
        array (
            'Carbon_Fields\\' => 14,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'ScssPhp\\ScssPhp\\' => 
        array (
            0 => __DIR__ . '/..' . '/scssphp/scssphp/src',
        ),
        'Carbon_Fields\\' => 
        array (
            0 => __DIR__ . '/..' . '/htmlburger/carbon-fields/core',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit9cbf56478e742c41099babb5ecfa5a68978::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit9cbf56478e742c41099babb5ecfa5a68978::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit9cbf56478e742c41099babb5ecfa5a68978::$classMap;

        }, null, ClassLoader::class);
    }
}
