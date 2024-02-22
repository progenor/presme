import { User, createClient } from "@liveblocks/client";
import { createRoomContext } from "@liveblocks/react";

const client = createClient({
  publicApiKey:
    "pk_dev_Q4MOH1JA7sL6apCR9PrTI9jVLTGESBgdw7SfmiK542LdqmrpYHV-I9Vo6OPgzcnF",
  // authEndpoint: "/api/auth",
  // throttle: 100,
});

// Presence represents the properties that exist on every user in the Room
// and that will automatically be kept in sync. Accessible through the
// `user.presence` property. Must be JSON-serializable.
type Presence = {
  // cursor: { x: number, y: number } | null,
  // ...
};

// Optionally, Storage represents the shared document that persists in the
// Room, even after all users leave. Fields under Storage typically are
// LiveList, LiveMap, LiveObject instances, for which updates are
// automatically persisted and synced to all connected clients.
type Storage = {
  // author: LiveObject<{ firstName: string, lastName: string }>,
  // ...
};

// Optionally, UserMeta represents static/readonly metadata on each user, as
// provided by your own custom auth back end (if used). Useful for data that
// will not change during a session, like a user's name or avatar.
type UserMeta = {
  id?: string; // Accessible through `user.id`
  info?: {
    name: string;
    avatar: string;
    isPresenter: boolean;
  }; // Accessible through `user.info`
};

// Optionally, the type of custom events broadcast and listened to in this
// room. Use a union for multiple events. Must be JSON-serializable.
type RoomEvent = {
  // type: "NOTIFICATION",
  // ...
};

// Optionally, when using Comments, ThreadMetadata represents metadata on
// each thread. Can only contain booleans, strings, and numbers.
export type ThreadMetadata = {
  // resolved: boolean;
  // quote: string;
  // time: number;
};

export const {
  suspense: {
    RoomProvider,
    useRoom,
    useMyPresence,
    useUpdateMyPresence,
    useSelf,
    useOthers,
    useOthersMapped,
    useOthersConnectionIds,
    useOther,
    useBroadcastEvent,
    useEventListener,
    useErrorListener,
    useStorage,
    useObject,
    useMap,
    useList,
    useBatch,
    useHistory,
    useUndo,
    useRedo,
    useCanUndo,
    useCanRedo,
    useMutation,
    useStatus,
    useLostConnectionListener,
    useThreads,
    useUser,
    useCreateThread,
    useEditThreadMetadata,
    useCreateComment,
    useEditComment,
    useDeleteComment,
    useAddReaction,
    useRemoveReaction,
  },
} = createRoomContext<Presence, Storage, UserMeta, RoomEvent, ThreadMetadata>(
  client,
  {
    // async resolveUsers({ userIds }) {
    //   // Get users from your back end
    //   const users = await Promise<String[]>; // __fetchUsersFromDB__(userIds);

    //   // Return a list of users
    //   return users;
    // },

    async resolveMentionSuggestions({ text, roomId }) {
      // Used only for Comments. Return a list of userIds that match `text`.
      // These userIds are used to create a mention list when typing in the
      // composer.
      //
      // For example when you type "@jo", `text` will be `"jo"`, and
      // you should to return an array with John and Joanna's userIds:
      // ["john@example.com", "joanna@example.com"]

      // const userIds = await __fetchAllUserIdsFromDB__(roomId);
      //
      // Return all userIds if no `text`
      // if (!text) {
      //   return userIds;
      // }
      //
      // Otherwise, filter userIds for the search `text` and return
      // return userIds.filter((userId) =>
      //   userId.toLowerCase().includes(text.toLowerCase())
      // );

      return [];
    },
  }
);
