export type Info = {
    /**
     * name of the info
     */
    name: string;
    /**
     * url of the info data
     */
    url: string;
}

export type Url = string | null;

export type PokeResponse = {
    /**
     *  total number of records available
     */
    count: number,
    /**
     * url for the next set of record
     */
    next: Url,
    /**
     * url for the previous set of records
     */
    previous: Url,
    /**
     * Array of `Poke Info`
     */
    results: Info[];
};

export type Ability = {
    is_hidden: boolean;
    slot: number;
    ability: Info
}

export type Cries = {
    latest: string;
    legacy: string;
}

export type GameIndex = {
    game_index: number;
    version: Info;
};

export type VersionDetails = {
    rarity: number;
    version: Info;
};

export type Item = {
    item: Info;
    version_details: VersionDetails;
}

export type VersionGroupDetail = {
    level_learned_at: number;
    move_learn_method: Info;
    version_group: Info;
};

export type Move = {
    move: Info;
    version_group_details: VersionGroupDetail[];
};

export type ArtInfo = {
    back_default?: Url;
    back_female?: Url;
    back_shiny?: Url;
    back_shiny_female?: Url;
    front_default?: Url;
    front_female?: Url;
    front_shiny?: Url;
    front_shiny_female?: Url;
}

export type ArtInfoTypes = 'dream_world' | 'home'| 'official-artwork' | 'showdown' | 'red-blue' | 'yellow' | 'crystal' | 'gold' | 'silver';  // todo

export type VersionType = 'generation-i' | 'generation-ii' | 'generation-iii' | 'generation-iv' | 'generation-v' | 'generation-vi' | 'generation-vii' | 'generation-viii';

export type SpriteVersion = Record<string | ArtInfoTypes, ArtInfo>;

export type Sprites = {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
    other: Record<string | ArtInfoTypes, ArtInfo>;
    versions: Record<string | VersionType, SpriteVersion>;
}

export type Stat =  {
    base_stat: number;
    effort: number;
    stat: Info;
}

export type Type = {
    slot: number,
    type: Info;
}

export type Poke = {
    abilities: Ability[];
    base_experience: number;
    cries: Cries;
    forms: Info[];
    game_indices: GameIndex[];
    height: number;
    held_items: Item[];
    id: string;
    is_default: boolean;
    location_area_encounters: string; // url
    moves: Move[];
    name: string;
    order: number;
    past_abilities: Ability[];
    past_types: Type[];
    species: Info;
    sprites: Sprites;
    stats: Stat[];
    types: Type[];
    weight: number;
}

const tempSampleResults = {
    "count": 1302,
    "next": "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20",
    "previous": null,
    "results": [
        { "name": "bulbasaur", "url": "https://pokeapi.co/api/v2/pokemon/1/" },
        { "name": "ivysaur", "url": "https://pokeapi.co/api/v2/pokemon/2/" },
        { "name": "venusaur", "url": "https://pokeapi.co/api/v2/pokemon/3/" },
        { "name": "charmander", "url": "https://pokeapi.co/api/v2/pokemon/4/" },
        { "name": "charmeleon", "url": "https://pokeapi.co/api/v2/pokemon/5/" },
        { "name": "charizard", "url": "https://pokeapi.co/api/v2/pokemon/6/" },
        { "name": "squirtle", "url": "https://pokeapi.co/api/v2/pokemon/7/" },
        { "name": "wartortle", "url": "https://pokeapi.co/api/v2/pokemon/8/" },
        { "name": "blastoise", "url": "https://pokeapi.co/api/v2/pokemon/9/" },
        { "name": "caterpie", "url": "https://pokeapi.co/api/v2/pokemon/10/" },
        { "name": "metapod", "url": "https://pokeapi.co/api/v2/pokemon/11/" },
        { "name": "butterfree", "url": "https://pokeapi.co/api/v2/pokemon/12/" },
        { "name": "weedle", "url": "https://pokeapi.co/api/v2/pokemon/13/" },
        { "name": "kakuna", "url": "https://pokeapi.co/api/v2/pokemon/14/" },
        { "name": "beedrill", "url": "https://pokeapi.co/api/v2/pokemon/15/" },
        { "name": "pidgey", "url": "https://pokeapi.co/api/v2/pokemon/16/" },
        { "name": "pidgeotto", "url": "https://pokeapi.co/api/v2/pokemon/17/" },
        { "name": "pidgeot", "url": "https://pokeapi.co/api/v2/pokemon/18/" },
        { "name": "rattata", "url": "https://pokeapi.co/api/v2/pokemon/19/" },
        { "name": "raticate", "url": "https://pokeapi.co/api/v2/pokemon/20/" },
    ]
}

const tempSamplePoke = {
    "abilities": [
        {
            "ability": {
                "name": "run-away",
                "url": "https://pokeapi.co/api/v2/ability/50/"
            },
            "is_hidden": false,
            "slot": 1
        },
        {
            "ability": {
                "name": "guts",
                "url": "https://pokeapi.co/api/v2/ability/62/"
            },
            "is_hidden": false,
            "slot": 2
        },
        {
            "ability": {
                "name": "hustle",
                "url": "https://pokeapi.co/api/v2/ability/55/"
            },
            "is_hidden": true,
            "slot": 3
        }
    ],
    "base_experience": 145,
    "cries": {
        "latest": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/20.ogg",
        "legacy": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/20.ogg"
    },
    "forms": [
        {
            "name": "raticate",
            "url": "https://pokeapi.co/api/v2/pokemon-form/20/"
        }
    ],
    "game_indices": [
        {
            "game_index": 166,
            "version": {
                "name": "red",
                "url": "https://pokeapi.co/api/v2/version/1/"
            }
        },
        {
            "game_index": 166,
            "version": {
                "name": "blue",
                "url": "https://pokeapi.co/api/v2/version/2/"
            }
        },
        {
            "game_index": 166,
            "version": {
                "name": "yellow",
                "url": "https://pokeapi.co/api/v2/version/3/"
            }
        },
        {
            "game_index": 20,
            "version": {
                "name": "gold",
                "url": "https://pokeapi.co/api/v2/version/4/"
            }
        },
        {
            "game_index": 20,
            "version": {
                "name": "silver",
                "url": "https://pokeapi.co/api/v2/version/5/"
            }
        },
        {
            "game_index": 20,
            "version": {
                "name": "crystal",
                "url": "https://pokeapi.co/api/v2/version/6/"
            }
        },
        {
            "game_index": 20,
            "version": {
                "name": "ruby",
                "url": "https://pokeapi.co/api/v2/version/7/"
            }
        },
        {
            "game_index": 20,
            "version": {
                "name": "sapphire",
                "url": "https://pokeapi.co/api/v2/version/8/"
            }
        },
        {
            "game_index": 20,
            "version": {
                "name": "emerald",
                "url": "https://pokeapi.co/api/v2/version/9/"
            }
        },
        {
            "game_index": 20,
            "version": {
                "name": "firered",
                "url": "https://pokeapi.co/api/v2/version/10/"
            }
        },
        {
            "game_index": 20,
            "version": {
                "name": "leafgreen",
                "url": "https://pokeapi.co/api/v2/version/11/"
            }
        },
        {
            "game_index": 20,
            "version": {
                "name": "diamond",
                "url": "https://pokeapi.co/api/v2/version/12/"
            }
        },
        {
            "game_index": 20,
            "version": {
                "name": "pearl",
                "url": "https://pokeapi.co/api/v2/version/13/"
            }
        },
        {
            "game_index": 20,
            "version": {
                "name": "platinum",
                "url": "https://pokeapi.co/api/v2/version/14/"
            }
        },
        {
            "game_index": 20,
            "version": {
                "name": "heartgold",
                "url": "https://pokeapi.co/api/v2/version/15/"
            }
        },
        {
            "game_index": 20,
            "version": {
                "name": "soulsilver",
                "url": "https://pokeapi.co/api/v2/version/16/"
            }
        },
        {
            "game_index": 20,
            "version": {
                "name": "black",
                "url": "https://pokeapi.co/api/v2/version/17/"
            }
        },
        {
            "game_index": 20,
            "version": {
                "name": "white",
                "url": "https://pokeapi.co/api/v2/version/18/"
            }
        },
        {
            "game_index": 20,
            "version": {
                "name": "black-2",
                "url": "https://pokeapi.co/api/v2/version/21/"
            }
        },
        {
            "game_index": 20,
            "version": {
                "name": "white-2",
                "url": "https://pokeapi.co/api/v2/version/22/"
            }
        }
    ],
    "height": 7,
    "held_items": [
        {
            "item": {
                "name": "oran-berry",
                "url": "https://pokeapi.co/api/v2/item/132/"
            },
            "version_details": [
                {
                    "rarity": 50,
                    "version": {
                        "name": "firered",
                        "url": "https://pokeapi.co/api/v2/version/10/"
                    }
                },
                {
                    "rarity": 50,
                    "version": {
                        "name": "leafgreen",
                        "url": "https://pokeapi.co/api/v2/version/11/"
                    }
                }
            ]
        },
        {
            "item": {
                "name": "sitrus-berry",
                "url": "https://pokeapi.co/api/v2/item/135/"
            },
            "version_details": [
                {
                    "rarity": 5,
                    "version": {
                        "name": "firered",
                        "url": "https://pokeapi.co/api/v2/version/10/"
                    }
                },
                {
                    "rarity": 5,
                    "version": {
                        "name": "leafgreen",
                        "url": "https://pokeapi.co/api/v2/version/11/"
                    }
                }
            ]
        },
        {
            "item": {
                "name": "chilan-berry",
                "url": "https://pokeapi.co/api/v2/item/177/"
            },
            "version_details": [
                {
                    "rarity": 5,
                    "version": {
                        "name": "diamond",
                        "url": "https://pokeapi.co/api/v2/version/12/"
                    }
                },
                {
                    "rarity": 5,
                    "version": {
                        "name": "pearl",
                        "url": "https://pokeapi.co/api/v2/version/13/"
                    }
                },
                {
                    "rarity": 5,
                    "version": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version/14/"
                    }
                },
                {
                    "rarity": 5,
                    "version": {
                        "name": "heartgold",
                        "url": "https://pokeapi.co/api/v2/version/15/"
                    }
                },
                {
                    "rarity": 5,
                    "version": {
                        "name": "soulsilver",
                        "url": "https://pokeapi.co/api/v2/version/16/"
                    }
                },
                {
                    "rarity": 5,
                    "version": {
                        "name": "black",
                        "url": "https://pokeapi.co/api/v2/version/17/"
                    }
                },
                {
                    "rarity": 5,
                    "version": {
                        "name": "white",
                        "url": "https://pokeapi.co/api/v2/version/18/"
                    }
                }
            ]
        }
    ],
    "id": 20,
    "is_default": true,
    "location_area_encounters": "https://pokeapi.co/api/v2/pokemon/20/encounters",
    "moves": [
        {
            "move": {
                "name": "swords-dance",
                "url": "https://pokeapi.co/api/v2/move/14/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokeapi.co/api/v2/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/23/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/23/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "cut",
                "url": "https://pokeapi.co/api/v2/move/15/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokeapi.co/api/v2/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokeapi.co/api/v2/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokeapi.co/api/v2/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokeapi.co/api/v2/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokeapi.co/api/v2/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/23/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "headbutt",
                "url": "https://pokeapi.co/api/v2/move/29/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokeapi.co/api/v2/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokeapi.co/api/v2/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokeapi.co/api/v2/version-group/19/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "tackle",
                "url": "https://pokeapi.co/api/v2/move/33/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokeapi.co/api/v2/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokeapi.co/api/v2/version-group/2/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokeapi.co/api/v2/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokeapi.co/api/v2/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokeapi.co/api/v2/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokeapi.co/api/v2/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokeapi.co/api/v2/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokeapi.co/api/v2/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/23/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "body-slam",
                "url": "https://pokeapi.co/api/v2/move/34/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokeapi.co/api/v2/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokeapi.co/api/v2/version-group/2/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokeapi.co/api/v2/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokeapi.co/api/v2/version-group/13/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "take-down",
                "url": "https://pokeapi.co/api/v2/move/36/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokeapi.co/api/v2/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokeapi.co/api/v2/version-group/2/"
                    }
                },
                {
                    "level_learned_at": 16,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/23/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "double-edge",
                "url": "https://pokeapi.co/api/v2/move/38/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokeapi.co/api/v2/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokeapi.co/api/v2/version-group/2/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokeapi.co/api/v2/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 39,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 39,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 39,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 39,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokeapi.co/api/v2/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 39,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 39,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 39,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 39,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 39,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 42,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokeapi.co/api/v2/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 39,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/23/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "tail-whip",
                "url": "https://pokeapi.co/api/v2/move/39/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokeapi.co/api/v2/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokeapi.co/api/v2/version-group/2/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokeapi.co/api/v2/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokeapi.co/api/v2/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokeapi.co/api/v2/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokeapi.co/api/v2/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokeapi.co/api/v2/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokeapi.co/api/v2/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 3,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokeapi.co/api/v2/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/23/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "bite",
                "url": "https://pokeapi.co/api/v2/move/44/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 10,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 10,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 10,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 10,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 10,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 10,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 10,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 10,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 10,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 12,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokeapi.co/api/v2/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 10,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/23/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "roar",
                "url": "https://pokeapi.co/api/v2/move/46/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokeapi.co/api/v2/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokeapi.co/api/v2/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokeapi.co/api/v2/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokeapi.co/api/v2/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokeapi.co/api/v2/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/23/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "water-gun",
                "url": "https://pokeapi.co/api/v2/move/55/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokeapi.co/api/v2/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokeapi.co/api/v2/version-group/2/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "ice-beam",
                "url": "https://pokeapi.co/api/v2/move/58/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokeapi.co/api/v2/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokeapi.co/api/v2/version-group/2/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokeapi.co/api/v2/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokeapi.co/api/v2/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokeapi.co/api/v2/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokeapi.co/api/v2/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokeapi.co/api/v2/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/23/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "blizzard",
                "url": "https://pokeapi.co/api/v2/move/59/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokeapi.co/api/v2/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokeapi.co/api/v2/version-group/2/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokeapi.co/api/v2/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokeapi.co/api/v2/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokeapi.co/api/v2/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokeapi.co/api/v2/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokeapi.co/api/v2/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokeapi.co/api/v2/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/23/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "bubble-beam",
                "url": "https://pokeapi.co/api/v2/move/61/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokeapi.co/api/v2/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokeapi.co/api/v2/version-group/2/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "hyper-beam",
                "url": "https://pokeapi.co/api/v2/move/63/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokeapi.co/api/v2/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokeapi.co/api/v2/version-group/2/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokeapi.co/api/v2/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokeapi.co/api/v2/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokeapi.co/api/v2/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokeapi.co/api/v2/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokeapi.co/api/v2/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokeapi.co/api/v2/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/23/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "counter",
                "url": "https://pokeapi.co/api/v2/move/68/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokeapi.co/api/v2/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokeapi.co/api/v2/version-group/19/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "strength",
                "url": "https://pokeapi.co/api/v2/move/70/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokeapi.co/api/v2/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokeapi.co/api/v2/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokeapi.co/api/v2/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokeapi.co/api/v2/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokeapi.co/api/v2/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/23/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "thunderbolt",
                "url": "https://pokeapi.co/api/v2/move/85/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokeapi.co/api/v2/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokeapi.co/api/v2/version-group/2/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokeapi.co/api/v2/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokeapi.co/api/v2/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokeapi.co/api/v2/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokeapi.co/api/v2/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokeapi.co/api/v2/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/23/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "thunder-wave",
                "url": "https://pokeapi.co/api/v2/move/86/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokeapi.co/api/v2/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokeapi.co/api/v2/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokeapi.co/api/v2/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/23/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "thunder",
                "url": "https://pokeapi.co/api/v2/move/87/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokeapi.co/api/v2/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokeapi.co/api/v2/version-group/2/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokeapi.co/api/v2/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokeapi.co/api/v2/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokeapi.co/api/v2/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokeapi.co/api/v2/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokeapi.co/api/v2/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokeapi.co/api/v2/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/23/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "dig",
                "url": "https://pokeapi.co/api/v2/move/91/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokeapi.co/api/v2/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokeapi.co/api/v2/version-group/2/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokeapi.co/api/v2/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokeapi.co/api/v2/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokeapi.co/api/v2/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokeapi.co/api/v2/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokeapi.co/api/v2/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokeapi.co/api/v2/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/23/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "toxic",
                "url": "https://pokeapi.co/api/v2/move/92/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokeapi.co/api/v2/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokeapi.co/api/v2/version-group/2/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokeapi.co/api/v2/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokeapi.co/api/v2/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokeapi.co/api/v2/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokeapi.co/api/v2/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokeapi.co/api/v2/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokeapi.co/api/v2/version-group/19/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "quick-attack",
                "url": "https://pokeapi.co/api/v2/move/98/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokeapi.co/api/v2/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 7,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokeapi.co/api/v2/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokeapi.co/api/v2/version-group/2/"
                    }
                },
                {
                    "level_learned_at": 7,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokeapi.co/api/v2/version-group/2/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokeapi.co/api/v2/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 7,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokeapi.co/api/v2/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokeapi.co/api/v2/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 7,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokeapi.co/api/v2/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 7,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 7,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokeapi.co/api/v2/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 7,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokeapi.co/api/v2/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 4,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 4,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 4,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 4,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokeapi.co/api/v2/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 7,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokeapi.co/api/v2/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokeapi.co/api/v2/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 7,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokeapi.co/api/v2/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 4,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 4,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 4,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 4,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 4,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokeapi.co/api/v2/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 6,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokeapi.co/api/v2/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/23/"
                    }
                },
                {
                    "level_learned_at": 4,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/23/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "rage",
                "url": "https://pokeapi.co/api/v2/move/99/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokeapi.co/api/v2/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokeapi.co/api/v2/version-group/2/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "mimic",
                "url": "https://pokeapi.co/api/v2/move/102/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokeapi.co/api/v2/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokeapi.co/api/v2/version-group/2/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokeapi.co/api/v2/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokeapi.co/api/v2/version-group/13/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "double-team",
                "url": "https://pokeapi.co/api/v2/move/104/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokeapi.co/api/v2/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokeapi.co/api/v2/version-group/2/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokeapi.co/api/v2/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokeapi.co/api/v2/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokeapi.co/api/v2/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokeapi.co/api/v2/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokeapi.co/api/v2/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/23/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "defense-curl",
                "url": "https://pokeapi.co/api/v2/move/111/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokeapi.co/api/v2/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokeapi.co/api/v2/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "focus-energy",
                "url": "https://pokeapi.co/api/v2/move/116/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 27,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokeapi.co/api/v2/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 27,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokeapi.co/api/v2/version-group/2/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 7,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 7,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 7,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 7,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 7,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 7,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 7,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 7,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 7,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokeapi.co/api/v2/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 9,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokeapi.co/api/v2/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/23/"
                    }
                },
                {
                    "level_learned_at": 7,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/23/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "bide",
                "url": "https://pokeapi.co/api/v2/move/117/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokeapi.co/api/v2/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokeapi.co/api/v2/version-group/2/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "swift",
                "url": "https://pokeapi.co/api/v2/move/129/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokeapi.co/api/v2/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokeapi.co/api/v2/version-group/2/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokeapi.co/api/v2/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokeapi.co/api/v2/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "skull-bash",
                "url": "https://pokeapi.co/api/v2/move/130/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokeapi.co/api/v2/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokeapi.co/api/v2/version-group/2/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "fury-swipes",
                "url": "https://pokeapi.co/api/v2/move/154/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokeapi.co/api/v2/version-group/19/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "rest",
                "url": "https://pokeapi.co/api/v2/move/156/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokeapi.co/api/v2/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokeapi.co/api/v2/version-group/2/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokeapi.co/api/v2/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokeapi.co/api/v2/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokeapi.co/api/v2/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokeapi.co/api/v2/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokeapi.co/api/v2/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokeapi.co/api/v2/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/23/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "hyper-fang",
                "url": "https://pokeapi.co/api/v2/move/158/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 14,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokeapi.co/api/v2/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 14,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokeapi.co/api/v2/version-group/2/"
                    }
                },
                {
                    "level_learned_at": 13,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokeapi.co/api/v2/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 13,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokeapi.co/api/v2/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 13,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 13,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 13,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokeapi.co/api/v2/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 16,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 16,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 16,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 16,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 13,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokeapi.co/api/v2/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 13,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokeapi.co/api/v2/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 16,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 16,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 16,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 16,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 16,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 26,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokeapi.co/api/v2/version-group/19/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "super-fang",
                "url": "https://pokeapi.co/api/v2/move/162/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 41,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokeapi.co/api/v2/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 41,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokeapi.co/api/v2/version-group/2/"
                    }
                },
                {
                    "level_learned_at": 40,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokeapi.co/api/v2/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 40,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokeapi.co/api/v2/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 40,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 40,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 40,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokeapi.co/api/v2/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 34,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 34,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 34,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 34,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 40,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokeapi.co/api/v2/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 40,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokeapi.co/api/v2/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 34,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 34,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 34,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 34,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 34,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 15,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokeapi.co/api/v2/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 34,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/23/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "substitute",
                "url": "https://pokeapi.co/api/v2/move/164/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokeapi.co/api/v2/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokeapi.co/api/v2/version-group/2/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokeapi.co/api/v2/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokeapi.co/api/v2/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokeapi.co/api/v2/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/23/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "thief",
                "url": "https://pokeapi.co/api/v2/move/168/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokeapi.co/api/v2/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokeapi.co/api/v2/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokeapi.co/api/v2/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokeapi.co/api/v2/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokeapi.co/api/v2/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/23/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "snore",
                "url": "https://pokeapi.co/api/v2/move/173/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokeapi.co/api/v2/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokeapi.co/api/v2/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "curse",
                "url": "https://pokeapi.co/api/v2/move/174/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokeapi.co/api/v2/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokeapi.co/api/v2/version-group/4/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "protect",
                "url": "https://pokeapi.co/api/v2/move/182/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokeapi.co/api/v2/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokeapi.co/api/v2/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokeapi.co/api/v2/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokeapi.co/api/v2/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokeapi.co/api/v2/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokeapi.co/api/v2/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/23/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "scary-face",
                "url": "https://pokeapi.co/api/v2/move/184/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 20,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokeapi.co/api/v2/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 20,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokeapi.co/api/v2/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 20,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 20,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 20,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokeapi.co/api/v2/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 20,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 20,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 20,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 20,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 20,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokeapi.co/api/v2/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 20,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokeapi.co/api/v2/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 20,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 20,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 20,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/23/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/23/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "sludge-bomb",
                "url": "https://pokeapi.co/api/v2/move/188/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/23/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "mud-slap",
                "url": "https://pokeapi.co/api/v2/move/189/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokeapi.co/api/v2/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokeapi.co/api/v2/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "icy-wind",
                "url": "https://pokeapi.co/api/v2/move/196/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokeapi.co/api/v2/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokeapi.co/api/v2/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokeapi.co/api/v2/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "endure",
                "url": "https://pokeapi.co/api/v2/move/203/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokeapi.co/api/v2/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokeapi.co/api/v2/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/23/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "swagger",
                "url": "https://pokeapi.co/api/v2/move/207/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokeapi.co/api/v2/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokeapi.co/api/v2/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokeapi.co/api/v2/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/23/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "attract",
                "url": "https://pokeapi.co/api/v2/move/213/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokeapi.co/api/v2/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokeapi.co/api/v2/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokeapi.co/api/v2/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokeapi.co/api/v2/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokeapi.co/api/v2/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/23/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "sleep-talk",
                "url": "https://pokeapi.co/api/v2/move/214/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokeapi.co/api/v2/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokeapi.co/api/v2/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/23/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "return",
                "url": "https://pokeapi.co/api/v2/move/216/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokeapi.co/api/v2/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokeapi.co/api/v2/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokeapi.co/api/v2/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokeapi.co/api/v2/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokeapi.co/api/v2/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "frustration",
                "url": "https://pokeapi.co/api/v2/move/218/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokeapi.co/api/v2/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokeapi.co/api/v2/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokeapi.co/api/v2/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokeapi.co/api/v2/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokeapi.co/api/v2/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "pursuit",
                "url": "https://pokeapi.co/api/v2/move/228/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 30,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokeapi.co/api/v2/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 30,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokeapi.co/api/v2/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 30,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 30,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 30,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokeapi.co/api/v2/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 13,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 13,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 13,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 13,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 30,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokeapi.co/api/v2/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 30,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokeapi.co/api/v2/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 13,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 13,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 13,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 13,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 13,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "iron-tail",
                "url": "https://pokeapi.co/api/v2/move/231/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokeapi.co/api/v2/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokeapi.co/api/v2/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokeapi.co/api/v2/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokeapi.co/api/v2/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokeapi.co/api/v2/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokeapi.co/api/v2/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/23/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "hidden-power",
                "url": "https://pokeapi.co/api/v2/move/237/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokeapi.co/api/v2/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokeapi.co/api/v2/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokeapi.co/api/v2/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokeapi.co/api/v2/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokeapi.co/api/v2/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "rain-dance",
                "url": "https://pokeapi.co/api/v2/move/240/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokeapi.co/api/v2/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokeapi.co/api/v2/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokeapi.co/api/v2/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/23/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "sunny-day",
                "url": "https://pokeapi.co/api/v2/move/241/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokeapi.co/api/v2/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokeapi.co/api/v2/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokeapi.co/api/v2/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokeapi.co/api/v2/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokeapi.co/api/v2/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/23/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "crunch",
                "url": "https://pokeapi.co/api/v2/move/242/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 24,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 24,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 24,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 24,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 24,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 24,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 24,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 24,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 24,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 18,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokeapi.co/api/v2/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 24,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/23/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "shadow-ball",
                "url": "https://pokeapi.co/api/v2/move/247/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokeapi.co/api/v2/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokeapi.co/api/v2/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokeapi.co/api/v2/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokeapi.co/api/v2/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokeapi.co/api/v2/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokeapi.co/api/v2/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/23/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "rock-smash",
                "url": "https://pokeapi.co/api/v2/move/249/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokeapi.co/api/v2/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokeapi.co/api/v2/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokeapi.co/api/v2/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokeapi.co/api/v2/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokeapi.co/api/v2/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/23/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "uproar",
                "url": "https://pokeapi.co/api/v2/move/253/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "facade",
                "url": "https://pokeapi.co/api/v2/move/263/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokeapi.co/api/v2/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokeapi.co/api/v2/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokeapi.co/api/v2/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokeapi.co/api/v2/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/23/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "taunt",
                "url": "https://pokeapi.co/api/v2/move/269/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokeapi.co/api/v2/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokeapi.co/api/v2/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokeapi.co/api/v2/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokeapi.co/api/v2/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/23/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "endeavor",
                "url": "https://pokeapi.co/api/v2/move/283/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 50,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 50,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 50,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokeapi.co/api/v2/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 44,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 44,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 44,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 44,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 50,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokeapi.co/api/v2/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 50,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokeapi.co/api/v2/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 44,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 44,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 44,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 44,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 44,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 44,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/23/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "secret-power",
                "url": "https://pokeapi.co/api/v2/move/290/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokeapi.co/api/v2/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokeapi.co/api/v2/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokeapi.co/api/v2/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "covet",
                "url": "https://pokeapi.co/api/v2/move/343/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "shock-wave",
                "url": "https://pokeapi.co/api/v2/move/351/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokeapi.co/api/v2/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokeapi.co/api/v2/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokeapi.co/api/v2/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/23/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "natural-gift",
                "url": "https://pokeapi.co/api/v2/move/363/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "pluck",
                "url": "https://pokeapi.co/api/v2/move/365/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/23/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "u-turn",
                "url": "https://pokeapi.co/api/v2/move/369/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokeapi.co/api/v2/version-group/19/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "assurance",
                "url": "https://pokeapi.co/api/v2/move/372/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 29,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 29,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 29,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 29,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 29,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 29,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 29,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 19,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 19,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 19,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/23/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "last-resort",
                "url": "https://pokeapi.co/api/v2/move/387/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "sucker-punch",
                "url": "https://pokeapi.co/api/v2/move/389/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 19,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 19,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 19,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 19,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 19,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 19,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 19,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 29,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 29,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 34,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokeapi.co/api/v2/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 29,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/23/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "giga-impact",
                "url": "https://pokeapi.co/api/v2/move/416/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/23/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "zen-headbutt",
                "url": "https://pokeapi.co/api/v2/move/428/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "captivate",
                "url": "https://pokeapi.co/api/v2/move/445/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "grass-knot",
                "url": "https://pokeapi.co/api/v2/move/447/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/23/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "charge-beam",
                "url": "https://pokeapi.co/api/v2/move/451/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/23/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "round",
                "url": "https://pokeapi.co/api/v2/move/496/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "retaliate",
                "url": "https://pokeapi.co/api/v2/move/514/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "work-up",
                "url": "https://pokeapi.co/api/v2/move/526/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/23/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "wild-charge",
                "url": "https://pokeapi.co/api/v2/move/528/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "confide",
                "url": "https://pokeapi.co/api/v2/move/590/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "laser-focus",
                "url": "https://pokeapi.co/api/v2/move/673/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 13,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/23/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "throat-chop",
                "url": "https://pokeapi.co/api/v2/move/675/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "stomping-tantrum",
                "url": "https://pokeapi.co/api/v2/move/707/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                }
            ]
        }
    ],
    "name": "raticate",
    "order": 27,
    "past_abilities": [],
    "past_types": [],
    "species": {
        "name": "raticate",
        "url": "https://pokeapi.co/api/v2/pokemon-species/20/"
    },
    "sprites": {
        "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/20.png",
        "back_female": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/female/20.png",
        "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/20.png",
        "back_shiny_female": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/female/20.png",
        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",
        "front_female": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/20.png",
        "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/20.png",
        "front_shiny_female": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/20.png",
        "other": {
            "dream_world": {
                "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/20.svg",
                "front_female": null
            },
            "home": {
                "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/20.png",
                "front_female": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/female/20.png",
                "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/20.png",
                "front_shiny_female": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/female/20.png"
            },
            "official-artwork": {
                "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/20.png",
                "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/20.png"
            },
            "showdown": {
                "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/20.gif",
                "back_female": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/female/20.gif",
                "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/shiny/20.gif",
                "back_shiny_female": null,
                "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/20.gif",
                "front_female": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/female/20.gif",
                "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/20.gif",
                "front_shiny_female": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/female/20.gif"
            }
        },
        "versions": {
            "generation-i": {
                "red-blue": {
                    "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/20.png",
                    "back_gray": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/20.png",
                    "back_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/back/20.png",
                    "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/20.png",
                    "front_gray": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/20.png",
                    "front_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/20.png"
                },
                "yellow": {
                    "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/20.png",
                    "back_gray": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/20.png",
                    "back_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/transparent/back/20.png",
                    "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/20.png",
                    "front_gray": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/20.png",
                    "front_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/transparent/20.png"
                }
            },
            "generation-ii": {
                "crystal": {
                    "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/20.png",
                    "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/20.png",
                    "back_shiny_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/back/shiny/20.png",
                    "back_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/back/20.png",
                    "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/20.png",
                    "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/20.png",
                    "front_shiny_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/shiny/20.png",
                    "front_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/20.png"
                },
                "gold": {
                    "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/20.png",
                    "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/20.png",
                    "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/20.png",
                    "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/20.png",
                    "front_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/transparent/20.png"
                },
                "silver": {
                    "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/20.png",
                    "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/20.png",
                    "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/20.png",
                    "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/20.png",
                    "front_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/transparent/20.png"
                }
            },
            "generation-iii": {
                "emerald": {
                    "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/20.png",
                    "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/20.png"
                },
                "firered-leafgreen": {
                    "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/20.png",
                    "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/20.png",
                    "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/20.png",
                    "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/20.png"
                },
                "ruby-sapphire": {
                    "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/20.png",
                    "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/20.png",
                    "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/20.png",
                    "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/20.png"
                }
            },
            "generation-iv": {
                "diamond-pearl": {
                    "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/20.png",
                    "back_female": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/female/20.png",
                    "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/20.png",
                    "back_shiny_female": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/female/20.png",
                    "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/20.png",
                    "front_female": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/female/20.png",
                    "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/20.png",
                    "front_shiny_female": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/female/20.png"
                },
                "heartgold-soulsilver": {
                    "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/20.png",
                    "back_female": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/female/20.png",
                    "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/20.png",
                    "back_shiny_female": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/female/20.png",
                    "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/20.png",
                    "front_female": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/female/20.png",
                    "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/20.png",
                    "front_shiny_female": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/female/20.png"
                },
                "platinum": {
                    "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/20.png",
                    "back_female": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/female/20.png",
                    "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/20.png",
                    "back_shiny_female": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/female/20.png",
                    "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/20.png",
                    "front_female": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/female/20.png",
                    "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/20.png",
                    "front_shiny_female": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/female/20.png"
                }
            },
            "generation-v": {
                "black-white": {
                    "animated": {
                        "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/20.gif",
                        "back_female": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/female/20.gif",
                        "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/20.gif",
                        "back_shiny_female": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/female/20.gif",
                        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/20.gif",
                        "front_female": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/female/20.gif",
                        "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/20.gif",
                        "front_shiny_female": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/female/20.gif"
                    },
                    "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/20.png",
                    "back_female": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/female/20.png",
                    "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/20.png",
                    "back_shiny_female": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/female/20.png",
                    "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/20.png",
                    "front_female": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/female/20.png",
                    "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/20.png",
                    "front_shiny_female": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/female/20.png"
                }
            },
            "generation-vi": {
                "omegaruby-alphasapphire": {
                    "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/20.png",
                    "front_female": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/female/20.png",
                    "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/20.png",
                    "front_shiny_female": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/female/20.png"
                },
                "x-y": {
                    "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/20.png",
                    "front_female": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/female/20.png",
                    "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/20.png",
                    "front_shiny_female": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/female/20.png"
                }
            },
            "generation-vii": {
                "icons": {
                    "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/20.png",
                    "front_female": null
                },
                "ultra-sun-ultra-moon": {
                    "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/20.png",
                    "front_female": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/female/20.png",
                    "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/20.png",
                    "front_shiny_female": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/female/20.png"
                }
            },
            "generation-viii": {
                "icons": {
                    "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/20.png",
                    "front_female": null
                }
            }
        }
    },
    "stats": [
        {
            "base_stat": 55,
            "effort": 0,
            "stat": {
                "name": "hp",
                "url": "https://pokeapi.co/api/v2/stat/1/"
            }
        },
        {
            "base_stat": 81,
            "effort": 0,
            "stat": {
                "name": "attack",
                "url": "https://pokeapi.co/api/v2/stat/2/"
            }
        },
        {
            "base_stat": 60,
            "effort": 0,
            "stat": {
                "name": "defense",
                "url": "https://pokeapi.co/api/v2/stat/3/"
            }
        },
        {
            "base_stat": 50,
            "effort": 0,
            "stat": {
                "name": "special-attack",
                "url": "https://pokeapi.co/api/v2/stat/4/"
            }
        },
        {
            "base_stat": 70,
            "effort": 0,
            "stat": {
                "name": "special-defense",
                "url": "https://pokeapi.co/api/v2/stat/5/"
            }
        },
        {
            "base_stat": 97,
            "effort": 2,
            "stat": {
                "name": "speed",
                "url": "https://pokeapi.co/api/v2/stat/6/"
            }
        }
    ],
    "types": [
        {
            "slot": 1,
            "type": {
                "name": "normal",
                "url": "https://pokeapi.co/api/v2/type/1/"
            }
        }
    ],
    "weight": 185
}