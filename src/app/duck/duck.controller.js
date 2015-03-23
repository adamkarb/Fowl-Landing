angular.module('waterfowlGulpAngular')

.controller('DuckCtrl', function(){
    
    
    
    
    
    
    
    
    
    
    
    duckArray = [
        {
            image: "http://upload.wikimedia.org/wikipedia/commons/b/bf/Anas_platyrhynchos_male_female_quadrat.jpg",
            name: "Mallard",
            description: "The mallard is one of the most recognized of all ducks and is the ancestor of several domestic breeds. Its wide range has given rise to several distinct populations. The male mallard's white neck-ring separates the green head from the chestnut-brown chest, contrasts with the gray sides, brownish back, black rump and black upper- and under-tail coverts. The speculum is violet-blue bordered by black and white, and the outer tail feathers are white. The bill is yellow to yellowish-green and the legs and feet are coral-red. Male utters a soft, rasping 'kreep.' The female mallard is a mottled brownish color and has a violet speculum bordered by black and white. The crown of the head is dark brown with a dark brown stripe running through the eye. The remainder of the head is lighter brown than the upper body. The bill is orange splotched with brown, and the legs and feet are orange. Female is especially vocal with the characteristic series of quacks."
        },
        {
            image:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTnMGfZjpTbWnt5yXTQVhkPQpEJ9xbNDODzcBgl-h2JBgayrJPKmQ",
            name: "Black Duck",
            description: "Black ducks are similar to mallards in size, and resemble the female mallard in coloration, though the black duck's plumage is darker. The male and female black duck are similar in appearance, but the male's bill is yellow while the female's is a dull green. The head is slightly lighter brown than the dark brown body, and the speculum is iridescent violet-blue with predominantly black margins. In flight, the white underwings can be seen in contrast to the dark brown body. The American black duck breeds from the upper Mississippi River across to the northeastern United States, north through northern Saskatchewan, Manitoba, across Ontario and the eastern Canadian provinces. The highest breeding densities are found in Maine and Nova Scotia."
        },
        {
            image: "http://www.grizzlyranchconservancy.org/images/green_winged_teal_duck.jpg",
            name: "Green Winged Teal",
            description: "Green-winged teal are the smallest of our North American ducks with a short neck and small bill. Male green-winged teal have a chestnut head with an iridescent green to purple patch extending from the eyes to the nape of the neck. The chest is pinkish-brown with black speckles, and the back, sides and flanks are vermiculated gray, separated from the chest by a white bar. The wing coverts are brownish-gray with a green speculum. The bill is dark slate and the legs and feet are dark gray. Males have a distinctive high-pitched \"preep-preep.\" Female green-winged teal are mottled brown with a dark brown line that extends from the bill through the eye. The bill is dark gray and the legs and feet are olive-gray to brownish-gray. Relatively silent but has a sharp, high \"quack\" when flushed."
        },
        {
            image:"http://1.bp.blogspot.com/_bMomiFlpT3Q/TNhnwvKMHhI/AAAAAAAABUs/0lkqjNQiIMA/s1600/Blue+Wing+Teal.jpg",
            name: "Blue Winged Teal",
            description: "Male blue-winged teal have a slate gray head and neck, a black-edged white crescent in front of the eyes and a blackish crown. The breast and sides are tan with dark brown speckles and there is a white spot on the side of the rump. Most of the upper wing coverts are blue-gray, the secondaries form an iridescent green speculum and the underwing is whitish. The bill is black and the legs and feet are yellowish to orange. The male has a thin whistled \"tsee tsee\" uttered both in flight and when on water. Female blue-winged teal have a brownish-gray head with a darker crown and eye stripe. The breast and sides are brown, the upper parts are olive brown, and the upper wing coverts are bluish, but less vibrant than the drake. The bill is gray-black and the legs and feet are dull yellow-brown. The female has a high-pitched squeak."
        },
        {
            image: "http://1.bp.blogspot.com/-U7Q77O7IQ-o/U7HsLDDgmmI/AAAAAAAADW8/1cAYanUNrVo/s1600/034.JPG",
            name: "Mottled Duck",
            description: "The adult mottled duck is 44 to 61 cm (17–24 in) long from head to tail. It has a dark body, lighter head and neck, orange legs and dark eyes. Both sexes have a shiny green-blue speculum (wing patch), which is not bordered with white as with the mallard. Males and females are similar, but the male's bill is bright yellow, whereas the female's is deep to pale orange, occasionally lined with black splotches around the edges and near the base.The plumage is darker than in female mallards, especially at the tail. In flight, the lack of a white border to the speculum is a key difference. The American black duck is darker than most mottled ducks, and its wing-patch is more purple than blue. The behaviour and voice are the same as the mallard. Mottled ducks feed by dabbling in shallow water, and grazing on land. They mainly eat plants, but also some mollusks and aquatic insects. The ducks are fairly common within their restricted range; they are resident all-year round and do not migrate. The breeding habitat is coastal marshes. The nest is built on the ground amongst vegetation, such as bull-rush and marsh grass."
        },
        {
            image: "data:image/jpeg;base64,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",
            name: "Gadwall",
            description: "Gadwalls are medium-sized ducks characterized by a general lack of bright coloration. Male gadwalls are gray-brown with a white belly and a black rump. In flight, a white speculum and chestnut and black portions on the wing coverts are displayed. The bill is slate-gray and the legs and feet are yellow. The male utters a short \"nheck\" and a low whistle. Female gadwalls are similar to males, but have a mottled brown appearance, a yellowish bill with dark spots and a smaller white speculum. She utters a repeated \"gag-ag-ag-ag-ag,\" higher in pitch than the mallard."
        },
        {
            image: "http://www.mendosa.com/fitnessblog/wp-content/uploads/2011/12/male-american-wigeon.jpg",
            name: "American Wigeon",
            description: "Both males and females have a bluish black-tipped bill. Male American wigeons have a white patch from the forehead to the middle of the crown and an iridescent green band from the eye to the back of the head. They have a pinkish-brown breast and sides that are separated from the black undertail coverts by white flank feathers. In flight, the white shoulder patch is diagnostic. The legs and feet are blue-gray to dark gray. Male whistles a \"whee whee whew.\" Female American wigeons have a gray head with a brownish-black crown and brownish chest and sides. The legs and feet are blue-gray to dark gray. Female vocalization is a \"qua-ack.\""
        },
        {
            image: "http://biology.csusb.edu/birds/images/northern_pintail1.jpg",
            name: "Northern Pintail",
            description: "Northern pintails are long, slender ducks with long, narrow wings, earning them the nickname \"greyhound of the air.\" Pintails are named for their elongated central tail feathers, which constitute one-fourth of the drake's body length. Male northern pintails have a chocolate-brown head with a white stripe on each side of the neck extending up from the white breast and belly. The back is blackish-gray and the rump has a white patch on each side. Two of the long central tail feathers are black while the others are gray margined by white. In flight, an iridescent greenish-black speculum is displayed. The bill is blue-gray with a black stripe along the center to the tip, and the legs and feet are slate-gray. The male has a mellow whistled \"kwee\" or \"kwee-hee.\" Female northern pintails have a dark-brown upper body with a buff or gray head and lower body. The speculum is a dull brown or bronze. The bill is blue-gray blotched with black, and the legs and feet are slate-gray. Female vocalization is a hoarse, muffled \"quack.\""
        },
        {
            image: "http://www.mendosa.com/fitnessblog/wp-content/uploads/2014/02/MG_7347.jpg",
            name: "Wood Duck",
            description: "Male wood ducks have a crested head that is iridescent green and purple with a white stripe leading from the eye to the end of the crest, and another narrower white stripe from the base of the bill to the tip of the crest. The throat is white and the chest is burgundy with white flecks, gradually grading into a white belly. The bill is brightly patterned black, white and red. The legs and feet are a dull straw yellow and the iris is red. The male call is a thin, high, rising \"jeeeeee.\" Female wood ducks have a gray-brown head and neck with a brownish, green, glossed crest. A white teardrop shaped patch surrounds the brownish-black eye. The throat is white and the breast is gray-brown stippled with white, fading into the white belly. The back is olive brown with a shimmer of iridescent green. The bill is blue-gray and the legs and feet are dull grayish-yellow. Females utter a drawn-out, rising squeal, \"oo-eek,\" when flushed, and a sharp \"cr-r-ek, cr-e-ek\" for an alarm call."
        },
        {
            image: "http://www.animalphotos.me/bird3/bird3-nzshov_files/nzshovl4.jpg",
            name: "Northern Shoveler",
            description: "Perhaps the most visible diagnostic characteristic of the northern shoveler is its large spoon-shaped bill, which widens towards the tip and creates a shape unique among North American waterfowl. Male northern shovelers have an iridescent green head and neck, white chest and breast and chestnut belly and sides. They have a white stripe extending from the breast along the margin of the gray-brown back, and white flank spots. The wings have a gray-blue shoulder patch, which is separated from a brilliant green speculum by a tapered white stripe. The bill is black in breeding plumage and the legs and feet are orange. During display, males will utter a repeated, liquid, hollow \"g-dunk g-dunk g-dunk\" in flight as well as from water. Female northern shovelers have a light brownish head with a blackish crown and a brownish speckled body. The upper wing coverts are grayish-blue, the greater secondary coverts are tipped with white and the secondaries are brown with a slight greenish sheen. The bill is olive green with fleshy orange in the gape area and speckled with black dots."
        },
        {
            image: "https://www.purelypoultry.com/images/redhead-ducks_01.jpg",
            name: "Redhead",
            description: "Male redheads have a reddish head and upper neck with a black lower neck, foreback and breast. The remaining back is a dark grayish color. The hind back and tail are brownish-black. A broad band of light gray extends across the dusky gray wing and out onto the primaries, which helps distinguish it from scaup. The legs and feet are gray, and the bill is light blue-gray with a whitish band behind a relatively wide black tip. The male call resembles the \"meow\" of a cat. Female redheads have a reddish-brown head, neck and breast, with a buff white chin and throat and an indistinct eye ring and stripe behind the eye. The flanks are warm brown, contrasting little with the breast, but with buffer fringes. The upper parts are darker and duller brown, with the upper-wing-coverts browner than on the male; otherwise the wing is similar to that of the male. The bill is duller than the male's, but similar in pattern."
        },
        {
            image: "http://www.animalphotos.me/bird3/bird3-canv_files/canvasback9.jpg",
            name: "Canvasback",
            description: "Male canvasbacks have a chestnut-red head and neck, a black breast, grayish back, black rump and blackish-brown tail. The sides, flank and belly are white, while the wing coverts are grayish and vermiculated with black. The bill is blackish and the legs and feet are bluish-gray. The iris is bright red in the spring, but duller in the winter. Female canvasbacks have a light brown head and neck, grading into a darker brown chest and foreback. The sides, flanks and back are grayish-brown. The bill is blackish and the legs and feet are bluish-gray."
        },
        {
            image: "http://sb.site-builder.ws/files/users/5/5A650BFC55267EF7E040A8C0AC003809/IMG_8820web.JPG",
            name: "Bufflehead",
            description: "Male buffleheads have a large white patch across the back of the head that extends from cheek to cheek, forming a bushy crest. The remainder of the head is blackish with an iridescent green and purple sheen. The neck, scapulars, breast, belly and sides are white, and the back and rump are black. The upper wing surface is blackish except for the white speculum extending from the inner and middle secondaries across to the outer lesser and marginal coverts. The bill is light blue-gray and the legs and feet are fleshy pink. Female buffleheads have a brownish head and neck, except for an oval white patch that extends from below the eye back towards the nape of the neck. The breast, sides and flanks are dark gray, the back is blackish, the belly is whitish and the tail is grayish-brown. The upper wing surface is blackish-brown, except for the inner and middle secondaries and inner greater coverts, which are white, tipped with black. The bill is dark gray and the legs and feet are grayish."
        },
        {
            image: "http://www.animalphotos.me/bird3/bird3-scaup_files/scaup_less.jpg",
            name: "Lesser Scaup",
            description: "Lesser and greater scaup are often found together. The smaller size of the lesser scaup is very obvious. Lesser scaup also have a smaller, less-round, purple-tinted head than greater scaup. Male lesser scaup have a glossy black head with a purple cast. The neck, breast and upper mantle are glossy black. Vermiculations on the sides and flanks are olive brown and contrast with the white chest and belly. The back is light gray with broad heavy vermiculations of sooty black. The tail, upper and under-tail coverts are black. The wing has a white speculum and the inner primaries are light brown, becoming darker towards the tips and outer primaries. The bill is a light blue-gray with a black nail, the legs and feet are gray and the iris is yellow. In courtship the male utters weak whistling notes. Female lesser scaup have a brownish head, neck and chest, and white oval patches around their bills. The back, rump and scapulars are dark brown and the speculum is white. The bill is similar to that of the male but slightly duller, the legs and feet are gray and the iris is yellow. The female has weaker growl than greater scaup."
        }
    ];
    
    this.list = duckArray;
});