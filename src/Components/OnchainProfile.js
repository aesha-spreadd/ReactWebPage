import React from 'react';
import {
  OnchainProfileSection,
  OnchainProfileContainer,
  OnchainProfileDetails,
  OnchainProfileHeading,
  OnchainProfileTag,
  OnchainProfileDescription,
  OnchainProfileSubHeading,
  OnchainProfileMatrixBox,
  OnchainProfileMatrixImage,
  OnchainProfileMatrixText,
  OnchainProfileWave,
  OnchainProfileSocialMedia,
  OnchainProfileInnerPart,
  OnchainProfileInnerImage,
  OnchainProfileLeftInner,
  OnchainProfileRightInner,
} from './OnchainProfileStyled';

const OnchainProfile = () => {
  return (
    <div>
      <OnchainProfileSection>
        <OnchainProfileContainer>
          <OnchainProfileDetails>
            <OnchainProfileDescription>
              <OnchainProfileTag>
                Permissionless, Non-custodial creator profile
              </OnchainProfileTag>
              <OnchainProfileHeading>
                On-chain profiles of creators built to bring more transparency
              </OnchainProfileHeading>
              <OnchainProfileSubHeading>
                You’ve got things to do. We build on-chain social graph of your
                activities; and map it with your ProfileNFT. Your profile has
                everything you need to see. It is ownership over this NFT that
                gives you control of your content. It contains the history of
                all of the your relation with audience, brands and fellow
                creators.
              </OnchainProfileSubHeading>
              <OnchainProfileMatrixBox>
                <OnchainProfileMatrixImage />
                <OnchainProfileMatrixText>
                  we make you better
                </OnchainProfileMatrixText>
              </OnchainProfileMatrixBox>
            </OnchainProfileDescription>
          </OnchainProfileDetails>
          <OnchainProfileWave>
            <svg
              viewBox="0 0 1440 117"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            >
              <path
                d="M1439.81 51.847h-349.12c-256.883 0-510.133 64.628-730.487 64.628C139.849 116.475 0 51.847 0 51.847V.41h1439.81v51.438Z"
                fill="#ff4e53"
              ></path>
            </svg>
          </OnchainProfileWave>
          <OnchainProfileSocialMedia>
            <OnchainProfileInnerPart>
              <OnchainProfileInnerImage>
                <OnchainProfileLeftInner>
                  <img src="https://spreadd.io/assets/home/socialMedia.png" />
                </OnchainProfileLeftInner>
                <OnchainProfileRightInner>
                  <img src="	https://spreadd.io/assets/home/store.png" />
                </OnchainProfileRightInner>
              </OnchainProfileInnerImage>
            </OnchainProfileInnerPart>
          </OnchainProfileSocialMedia>
        </OnchainProfileContainer>
      </OnchainProfileSection>
    </div>
  );
};

export default OnchainProfile;
