import React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { studioSubscribe } from '$reduxsaga/request/studio_request';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ControlsToggleButton from '$components/layout/Footer/music/Button';

const StudioSubscribe = ({ artist, sub, func, myMetamask }) => {
  const studio = useSelector(state => state.studio);

  const dispatch = useDispatch();
  // TODO: Notify when a subscribed person uploads an NFT
  const onClickSubscribeButton = action => {
    dispatch(
      studioSubscribe({
        artistId: studio.isSubscribingArtist.artistId,
        actionData: action,
        myMetamask,
      }),
    );
  };

  useEffect(() => {}, [
    studio && studio.subscribeArtistDone,
    studio.isSubscribingArtist?.isSubscribing,
  ]);

  return (
    <>
      {studio.isSubscribingArtist ? (
        studio.isSubscribingArtist.isSubscribing ? (
          <UnSubscribeButton
            onClick={() => onClickSubscribeButton('cancelSubscribe')}
          >
            Cancel Subscription
          </UnSubscribeButton>
        ) : (
          <SubscribeButton onClick={() => onClickSubscribeButton('subscribe')}>
            Subscribe
          </SubscribeButton>
        )
      ) : (
        <SubscribeButton onClick={() => onClickSubscribeButton('subscribe')}>
          Subscribe
        </SubscribeButton>
      )}
    </>
  );
};

export default StudioSubscribe;

const SubscribeButton = styled(Button)(() => ({
  color: '#fff',
  padding: '6px 12px',
  backgroundColor: '#1976ae',
  '&:hover': {
    backgroundColor: '#3d4463',
  },
}));

const UnSubscribeButton = styled(Button)(() => ({
  color: '#fff',
  padding: '6px 12px',
  backgroundColor: '#cc0000',
  '&:hover': {
    backgroundColor: '#3d4463',
  },
}));
