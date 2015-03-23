angular.module('waterfowlGulpAngular')

.controller('DuckCtrl', function(){
    
    
    
    
    
    
    
    
    
    
    
    var duckArray = [
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
            image: "http://3.bp.blogspot.com/-Er4ggMc6OBo/UKABS8GxhRI/AAAAAAAACMQ/WBR6lUeiQC4/s1600/IMG_0741.jpg",
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